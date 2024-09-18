/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "stones-100":"hsl(30, 54%, 90%)",
        "stones-150":"hsl(30, 18%, 87%)",
        "stones-600":"hsl(30, 10%, 34%)",
        "stones-900":"hsl(24, 5%, 18%)",
        "browns-800":"hsl(14, 45%, 36%)",
        "roses-800":"hsl(332, 51%, 32%)",
        "roses-50":"hsl(330, 100%, 98%)",
      },
      backgroundColor:{
        "stones-100":"hsl(30, 54%, 90%)",
        "stones-150":"hsl(30, 18%, 87%)",
        "stones-600":"hsl(30, 10%, 34%)",
        "stones-900":"hsl(24, 5%, 18%)",
        "browns-800":"hsl(14, 45%, 36%)",
        "roses-800":"hsl(332, 51%, 32%)",
        "roses-50":"hsl(330, 100%, 98%)",
      },
    },
  },
  plugins: [],
}