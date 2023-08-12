/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px'
    },
    colors: {
      "brightRed": 'hsl(12, 88%, 59%)',
      "darkBlue": 'hsl(228, 39%, 23%)',
      "darkGrayishBlue": 'hsl(227, 12%, 61%)',
      "veryDarkBlue": 'hsl(233, 12%, 13%)',
      "veryPaleRed": 'hsl(13, 100%, 96%)',
      "veryLightGray": 'hsl(0, 0%, 98%)',
    },
    extend: {
    },
    plugins: [],
  }
}
