/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      "moderate-cyan":"hsl(176, 50%, 47%)",
      "dark-cyan":"hsl(176, 72%, 28%)",
      "dark-gray":"hsl(0, 0%, 48%)",
    },
  },
  plugins: [],
}