/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F2F2F2',
        'secondary': '#EAE4D5',
        'text-primary': '#B6B09F',
        'text-dark': '#000000',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: '#EAE4D5',
      }
    },
  },
  plugins: [],
}
