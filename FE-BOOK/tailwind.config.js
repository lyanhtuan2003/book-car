/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0284c7",
        secondary: "#1d8348",
        success: "#5cb85c",
        danger: "#d9534f",
        bgHeader: '#38bdf8'
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        main: '#0284c7',
        overlay: 'rgba(0,0,0,0.5)'
      },
    },

  },
  plugins: [],
}