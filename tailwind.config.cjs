/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lato"],
      },
      colors: {
        primary: "#191d23",
        secondary: "#181818",
        blueColor: "#007AFF",
        text: "#7B8191",
        white: "#fff",
        tomato: "#FF6F50",
        darkblue: "#13161a",
        yellow: "#FFD166",
        darkBorder: "#FFFFFF14",
        borderColor: '#0000000A',
        subTitle: '#CCCCCC',
        optionButton: '#007AFF29'
      },
    },
  },
  plugins: [],
};
