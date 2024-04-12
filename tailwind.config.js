/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Landing': "url('/src/Images/bg.png')",
        'Landing2': "url('/src/Images/bg2.jpg')",
      }
    },
  },
  plugins: [],
}