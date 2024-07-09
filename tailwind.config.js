/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", 'sans-serif']
      },
      colors: {
        black: '#454545',
        bgColor: '#FFF0F0',
        buttonBg: '#FFD7BE',
      }
    },
  },
  plugins: [],
}