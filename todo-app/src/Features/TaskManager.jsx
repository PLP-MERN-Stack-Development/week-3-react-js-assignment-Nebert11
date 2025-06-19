import React, { useState, useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { fetchTasks } from "../api/fetchTasks";
import Button from "../components/Button";
import Card from "../components/Card";
import Spinner from "../components/Spinner";


const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tasksPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadTasks = async () => {
            setLoading(true);
            try {
                const apiTasks = await fetchTasks();
                const formatted = apiTasks.map((task) => ({
                    id: task.id,
                    text: task.todo, // <-- use 'todo' instead of 'title'
                    completed: task.completed,
                }));
                setTasks(formatted);
            } catch (err) {
                setError("Failed to load tasks");
            } finally {
                setLoading(false);
            }
        };
        loadTasks();
    }, []);

  const handleAddTask = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setInput("");
    setCurrentPage(1);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filtering and searching
  const filteredTasks = tasks.filter(task => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !task.completed) ||
      (filter === "completed" && task.completed);

    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <Card title="Task Manager">
      {/* Add task input */}
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
          className="flex-grow px-4 py-2 rounded-l border border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
        />
        <Button variant="primary" onClick={handleAddTask} className="rounded-l-none">
          Add
        </Button>
      </div>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search tasks..."
          className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
        />
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center gap-2 mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      {/* Task list */}
      <ul className="space-y-2">
        {loading ? (
        //   <p className="text-center text-blue-500">Loading tasks...</p>
          <Spinner />

        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : paginatedTasks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No tasks to display</p>
        ) : (
          paginatedTasks.map((task) => (
            <li
                key={task.id}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md"
            >

              <span
                onClick={() => toggleComplete(task.id)}
                className={`flex-grow cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)} className="ml-4 px-2 py-1">✕</Button>
            </li>
          ))
        )}
      </ul>

      {/* Pagination */}
      {filteredTasks.length > tasksPerPage && (
        <div className="flex justify-center mt-6 gap-4">
          <Button variant="secondary" onClick={handlePrev} disabled={currentPage === 1}>Prev</Button>
          <span className="text-gray-700 dark:text-gray-300 mt-1">
            Page {currentPage} of {totalPages}
          </span>
          <Button variant="secondary" onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
        </div>
      )}
    </Card>
  );
};

export default TaskManager;
