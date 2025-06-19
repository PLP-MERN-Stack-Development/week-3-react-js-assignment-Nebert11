// const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

// export const fetchTasks = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error("Failed to fetch tasks");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };


const API_URL = "https://dummyjson.com/todos?limit=10";

export const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const data = await response.json();
    // The todos are in data.todos
    return data.todos;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};