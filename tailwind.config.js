// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Tailwind userà il font della variabile CSS che gli passiamo da next/font
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
