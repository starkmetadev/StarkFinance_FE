const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17161b",
        textPrimary: "#f2f3f5",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
