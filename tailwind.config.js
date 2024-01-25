/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#00968F"
        },
        gray: {
          25: "#F4F6F8",
          450: "#637381"
        }
      }
    },
  },
  plugins: [],
}