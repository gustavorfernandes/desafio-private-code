/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito, sans-serif',
        poppins: 'Poppins, sans-serif',
      },
      colors: {
        "neutralPrivateCode": {
          100: '#F9F9F9',
          200: '#F0F4F5',
          300: '#EDEDED',
          400: '#D4D4D4',
          500: '#D1D1D1',
          600: '#696969',
          700: '#515151',
        },
        "greenPrivateCode": {
          100: '#2C9A44',
          200: '#0CAB2F',          
        },
        "redPrivateCode": {
          100: '#E83737',         
          200: '#C33535',         
        },
      },
      boxShadow: {
        'container': 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
