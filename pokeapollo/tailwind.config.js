/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grass-green': '#2d6147',
        'menu-yellow': '#e89404',
        'menu-green': '#204330',
      },
    },
  },
  plugins: [],
}
