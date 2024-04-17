/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['Lato']
      },
      colors: {
        primary: '#191d23',
        secondary: '#181818',
        blueColor: '#007AFF',
        text: "#7B8191",
        white:'#fff'
      }
    },
  },
  plugins: [],
}