/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      serif: ['"Young Serif"', "serif"],
      sans: ['"Outfit"', "system-ui", "sans-serif"],
    },
    },
  },
  plugins: [],
}