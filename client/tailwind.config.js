/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      mobile: '320px',
      preLaptop: '540px',
      laptop: '780px',
      preDesktop: '940px',
      desktop: '1200px',
      '2xDesktop': '1540px',
      '3xlDesktop': '1800px',
    },
  },
  plugins: [],
  darkMode: 'class',
};
