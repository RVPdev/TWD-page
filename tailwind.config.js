/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondaryDark' : '#0A0B0D',
        'primaryDark' : '#151618',
        'prmaryText' : '#F6D07C',
        'secondarySubtext' : '#FFFFFF',
        'secondaruText' : '#7D8084',
        'primaryGrey' : '#7D8084'
      }
    },
  },
  plugins: [],
}
