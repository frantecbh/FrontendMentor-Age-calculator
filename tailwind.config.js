/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'Black': '#151515',
      'Purple': '#854DFF',
      'White': '#FFFFFF',
      'Light Grey': '#F0F0F0',
      'Gray': '#716F6F',
      'Line': '#DCDCDC',
      'Red': '#FF5959',
      
    },
    extend: {},
  },
  plugins: [],
}
