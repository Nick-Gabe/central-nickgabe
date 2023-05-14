/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    backgroundColor: {
      black: '#121111',
      brightPurple: '#4D4577',
      primary: '#FE3B7B',
      purple: '#393359',
      transparent: 'rgba(0,0,0,0)',
      white: '#F2F2F2',
    },
    borderColor: {
      black: '#000000',
      brightPurple: '#4D4577',
      primary: '#FE3B7B',
      purple: '#393359',
      transparent: 'rgba(0,0,0,0)',
    },
    boxShadow: {
      solidPrimary: '5px 5px 0 0',
    },
    colors: {
      black: '#121111',
      neutral: '#F2F2F2',
      primary: '#FE3B7B',
      white: '#FFFFFF',
    },

    fontFamily: {
      hammersmith: "'Hammersmith One', sans-serif",
      inter: "'Inter', sans-serif",
    },
  },
};
