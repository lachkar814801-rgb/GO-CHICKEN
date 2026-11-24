/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107', // Yellow/Gold
        secondary: '#F44336', // Red
        background: '#1a1a1a', // Charcoal black
        surface: '#2d2d2d', // Dark gray surface
        text: '#ffffff', // White
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
