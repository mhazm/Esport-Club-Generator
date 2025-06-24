module.exports = {
  darkMode: 'class',
  content: [
    "./home.html",
    "./src/**/*.{html,js}",
    "./dist/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1E293B',
          200: '#0F172A',
        }
      }
    }
  },
  plugins: [],
}