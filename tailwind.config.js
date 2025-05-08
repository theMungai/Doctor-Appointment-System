/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#6EAB36',
        customTealBlue: '#007E85',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lexend: ['Lexend Tera', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
