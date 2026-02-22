/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['Archivo Black', 'sans-serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
        'blue-winter': ['BlueWinter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};