/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "Soft-Blue": " hsl(231, 69%, 60%)",
        "Soft-Red": "hsl(0, 94%, 66%)",
        "Grayish-Blue": "hsl(229, 8%, 60%)",
        "Very-Dark-Blue": "hsl(229, 31%, 21%)",
      },
      textColor: {
        "Soft-Blue": " hsl(231, 69%, 60%)",
        "Soft-Red": "hsl(0, 94%, 66%)",
        "Grayish-Blue": "hsl(229, 8%, 60%)",
        "Very-Dark-Blue": "hsl(229, 31%, 21%)",
      },
      borderColor: {
        "Soft-Blue": " hsl(231, 69%, 60%)",
        "Soft-Red": "hsl(0, 94%, 66%)",
        "Grayish-Blue": "hsl(229, 8%, 60%)",
        "Very-Dark-Blue": "hsl(229, 31%, 21%)",
      },
      fill: {
        "Soft-Blue": " #5368df",
        "Soft-Red": "#fa5757",
        "Grayish-Blue": "#9194a1",
        "Very-Dark-Blue": "#252b46",
      },
    },
  },
  plugins: [],
};
