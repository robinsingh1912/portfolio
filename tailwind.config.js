/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#000 0.5px, #fff 0.5px)',
        'gradient-radial-dark': 'radial-gradient(#ffffff 0.5px, #000000 0.5px)',
      },
    },
  },
  darkMode: ['class'],
  plugins: [],
};
