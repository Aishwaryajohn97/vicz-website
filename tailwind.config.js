/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'primary-dark': '#4338ca',
        secondary: '#7c3aed',
        accent: '#14b8a6',
        dark: '#1f2937',
        background: '#f9fafb',
      },
      backdropBlur: { sm: '4px', md: '12px' },
      boxShadow: { glass: '0 4px 30px rgba(0,0,0,0.1)' },
      animation: { fadeIn: 'fadeIn 1s ease-in forwards' },
      keyframes: { fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } } },
    },
  },
  plugins: [],
};





