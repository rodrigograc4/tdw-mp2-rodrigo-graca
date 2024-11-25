/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-purple': '#484050',
        'menu-yellow': '#e89404',
        'menu-green': '#383040',
      },
    },
  },
  plugins: [],
}
