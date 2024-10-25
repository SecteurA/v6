/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f8ff',
          100: '#ebf1ff',
          200: '#d7e3ff',
          300: '#b3c9ff',
          400: '#809fff',
          500: '#4d75ff',
          600: '#75b666',
          700: '#0033e6',
          800: '#0029b8',
          900: '#00248f',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}