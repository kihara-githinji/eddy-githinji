/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        aqua: 'hsl(178, 100%, 50%)',
        lightPurple: 'hsl(263, 100%, 79.6%)',
        brightOrange: '#FD5800',
        midnightNavyBlue: '#191975'
      },
      darkMode: 'Class',

      screens: {
        sm:'480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
