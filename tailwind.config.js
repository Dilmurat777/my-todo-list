/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#6C63FF',
        'darkPrimary': '#534CC2',
        'light-gray': '#CDCDCD',
        'placeholder': '#C3C1E5',
        'dark': '#252525',
        'textWhite': '#F7F7F7',
      }
    },
    fontFamily: {
      'sans': ['Kanit', 'Arial', 'sans-serif'],
    },
    
  },
  plugins: [],
};

