/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily:{
        inter: ['Inter']
      },
      colors:{
        primary: ['#1e293b'], //slate-800
        secondary: ['#475569'], //slate
        // tersier: ['#047857'],
        tersier: ['#b45309'], //emerald-700
        mawar: ['#9d174d'] //pink-800
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

