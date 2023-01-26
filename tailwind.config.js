/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx,js}'],
  theme: {
    extend: {
      fontFamily:{
        andika: ['Andika', 'serif']
      },
      colors: {
        bodyColor: "#f1faee",
        buttonColor: "#457b9d",
        deleteTxt: "#cc0f35",
        deleteBtn: "#feecf0",
        editTxt: "#946c00",
        editBtn: "#fffaeb"

      }
    },
  },
  plugins: [],
}
