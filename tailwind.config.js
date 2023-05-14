/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bblack': '#1f1e25',
      'twhite': '#f8fbfe',
      'tgray': '#6d6d73',
      'tgolden': '#f3a264',
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [],
}