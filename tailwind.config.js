const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17161b",
        secondary: "#202125",
        textPrimary: "#f2f3f5",
        magenta: "#d224ae",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
