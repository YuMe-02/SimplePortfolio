/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.125rem',
        'widest': '0.25rem',
      },
    },
  },
  plugins: [],
}