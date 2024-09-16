/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',],
  theme: {
    extend: {
      textColor: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "cream": "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      backgroundColor: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "cream": "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
}