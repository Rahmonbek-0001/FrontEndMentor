/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        'Dark-Violet': ' hsl(257, 27%, 26%)',
        red: ' hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        'Grayish-Violet': 'hsl(257, 7%, 63%)',
        'Very-Dark-Blue': 'hsl(255, 11%, 22%)',
        'Very-Dark-Violet': 'hsl(260, 8%, 14%)'
      },
      fontFamily: {
        poppins: ['Poppins', ' sans-serif']
      },
      backgroundImage: {
        'shorten-desktop': "url('./src/assets/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('./src/assets/images/bg-shorten-mobile.svg')",
        'boost-desktop': "url('./src/assets/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('./src/assets/images/bg-boost-mobile.svg')"
      },
    }
  },
  plugins: []
}
