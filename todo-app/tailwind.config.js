// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       transitionProperty: {
//         'bg': 'background-color',
//         'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
//       },
//     },
//   },
//   darkMode: 'class', // Enables dark mode support
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}