/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#6C63FF',
        'light-gray': '#CDCDCD',
        'placeholder': '#C3C1E5',
      }
    },
    fontFamily: {
      'sans': ['Kanit', 'Arial', 'sans-serif'],
    },
    
  },
  plugins: [],
};

