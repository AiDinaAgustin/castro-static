/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}" ,  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      primary: '#262626',
      secondary: '#4f4f4f',
      three: '#FAD810',
      four: '#111629',
      five: '#17C3F9',
      dark: '#212121',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Menlo', 'monospace'],
      raleway: ['Montserrat', 'sans-serif'],
      nunito: ['Playfair Display', 'serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
}