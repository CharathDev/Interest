/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      gray: "#e9eaec",
      black: "#0b0c0c",
      darkgrey: "#2a2e34",
      darkyellow: "#e4b61a",
      yellow: "#fbe134",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "header-image": "url('../images/header-bg.jpg')",
        "calisthenics-image": "url('../images/calisthenics.jpg')",
        "weights-image": "url('../images/weights.jpg')",
      },
      animation: {
        appear: "appear 1s ease-in-out forwards",
        appearHover: "appear .1s ease-in-out forwards",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
