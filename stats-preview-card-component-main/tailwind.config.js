/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "very-dark":" hsl(233, 47%, 7%)",
        "dark":"hsl(244, 38%, 16%)",
        "soft":"hsl(277, 64%, 61%)",
        "slightly2":"hsla(0, 0%, 100%, 0.75)",
        "slightly":"hsla(0, 0%, 100%, 0.6)",
      }
    },
  },
  plugins: [],
}