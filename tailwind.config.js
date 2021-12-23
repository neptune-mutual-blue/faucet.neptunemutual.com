module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    borderWidth: {
      default: "1px",
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      colors: {
        "222b37": "#222b37",
        dfdfee: "#dfdfee",
        f1f3f6: "#f1f3f6",
        "36309D": "#36309D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
