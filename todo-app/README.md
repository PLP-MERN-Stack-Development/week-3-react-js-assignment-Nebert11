# ToDo App

A modern, responsive ToDo application built with React, Vite, and Tailwind CSS. This app allows you to manage your daily tasks efficiently with features like task creation, completion, deletion, filtering, searching, pagination, and theme toggling (light/dark mode).

## Features

- **Add, complete, and delete tasks**
- **Filter tasks**: View all, active, or completed tasks
- **Search tasks**: Instantly filter tasks by keyword
- **Pagination**: Tasks are paginated for easy navigation
- **Persistent storage**: Tasks are saved in your browser's local storage
- **Fetch initial tasks**: Loads sample tasks from an external API on first load
- **Responsive design**: Works great on desktop and mobile
- **Light/Dark mode**: Toggle between light and dark themes, with preference saved

## Tech Stack

- [React](https://react.dev/) 19+
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [classnames](https://www.npmjs.com/package/classnames)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- pnpm (or use npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd todo-app
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/Features/TaskManager.jsx`: Main logic for managing tasks
- `src/components/`: Reusable UI components (Button, Card, Navbar, etc.)
- `src/Context/ThemeContext.jsx`: Theme (light/dark) context provider
- `src/api/fetchTasks.js`: Fetches initial tasks from an external API

## Customization
- You can change the number of tasks fetched or displayed per page in `TaskManager.jsx`.
- The theme preference is saved in localStorage and respects system settings by default.

## Deployed Link
https://todoapp-021.netlify.app/

