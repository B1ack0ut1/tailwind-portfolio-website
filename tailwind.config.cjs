/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      screens: {
        sm: "520px",
      },
      spacing: {
        big: "42rem",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
