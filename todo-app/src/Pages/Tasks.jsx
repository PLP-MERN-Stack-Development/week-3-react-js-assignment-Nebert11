import React from "react";
import TaskManager from "../components/TaskManager";

const Tasks = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Tasks</h2>
      <TaskManager />
    </div>
  );
};

export default Tasks;
