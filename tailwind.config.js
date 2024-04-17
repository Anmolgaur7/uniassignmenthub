/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Landing': "url('/src/Images/bg2.png')",
        'Landing2': "url('/src/Images/bg2.jpg')",
        'Landing3': "url('/src/Images/bg3')",
        'log': "url('/src/Images/bg2.gif')",
        'log1': "url('/src/Images/bggg.png')",
      }
    },
  },
  plugins: [],
}