/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        "grays-700": "hsl(0, 0%, 20%)",
        "grays-800": "hsl(0, 0%, 12%)",
        "grays-900": "hsl(0, 0%, 8%)",
      },
      backgroundColor: {
        green: "hsl(75, 94%, 57%)",
        "grays-700": "hsl(0, 0%, 20%)",
        "grays-800": "hsl(0, 0%, 12%)",
        "grays-900": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
