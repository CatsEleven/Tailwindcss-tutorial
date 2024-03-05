/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../docs/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      "tutorial-bg": "url('../docs/img/main-bg.jpeg')",
    },
  },
  plugins: [],
}