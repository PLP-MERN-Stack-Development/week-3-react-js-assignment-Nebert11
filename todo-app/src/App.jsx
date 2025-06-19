import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React from "react";
import Navbar from "./components/Navbar"; // Adjust the path if needed
import TaskManager from './Features/TaskManager';

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Navbar />
      <main className='max-w-3xl mx-auto py-8'>
        <TaskManager />
      </main>
    </div>
  );
}

export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import TaskManager from "./Features/TaskManager";

// function App() {
//   return (
//     <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
//       <Navbar />
//       <main className="max-w-3xl mx-auto py-8">
//         <TaskManager />
//       </main>
//     </div>
//   );
// }

// export default App;