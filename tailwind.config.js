/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: "#FE3B7B",
      neutral: "#F2F2F2",
      black: "#121111",
      white: "#FFFFFF",
    },
    backgroundColor: {
      primary: "#FE3B7B",
      purple: "#393359",
      brightPurple: "#4D4577",
      white: "#F2F2F2",
      black: "#121111",
      transparent: "rgba(0,0,0,0)"
    },
    borderColor: {
      primary: "#FE3B7B",
      black: "#000000",
      transparent: "rgba(0,0,0,0)"
    },
    fontFamily: {
      hammersmith: "'Hammersmith One', sans-serif",
      inter: "'Inter', sans-serif",
    }
  },
  plugins: [],
}
