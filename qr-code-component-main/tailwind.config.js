/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "slate-300":"hsl(212, 45%, 89%)",
        "slate-500":"hsl(216, 15%, 48%)",
        "slate-900":"hsl(218, 44%, 22%)"
      },
      backgroundColor:{
        "slates-300":"hsl(212, 45%, 89%)",
        "slates-500":"hsl(216, 15%, 48%)",
        "slates-900":"hsl(218, 44%, 22%)"
      }
    },
  },
  plugins: [],
}