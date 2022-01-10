module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": "hsl(209,23%,22%)",
      "very-dark-blue": "hsl(207, 26%, 17%)",
      "very-light-blue": "hsl(200, 15%, 8%)",
      "dark-gray": "hsl(0, 0%, 52%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
