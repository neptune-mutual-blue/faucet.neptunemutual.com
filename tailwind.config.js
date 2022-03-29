module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    fontFamily: {
      inter: "Inter, sans-serif",
      poppins: "Poppins, sans-serif",
      sora: "Sora, sans-serif",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#01052d",
        white: "#fefeff",
        "4e7dd9": "#4e7dd9",
        d4dfee: "#d4dfee",
        f1f3f6: "#f1f3f6",
        "36309D": "#36309D",
      },
      fontSize: {
        h1: ["33px", "48px"],
        h2: ["28px", "40px"],
        h3: ["23px", "32px"],
        h4: ["19px", "24px"],
        h5: ["16px", "24px"],
        h6: [
          "16px",
          {
            letterSpacing: "0.05em",
            lineHeight: "24px",
          },
        ],
        sm: ["14px", "16px"],
        para: ["16px", "28px"],
        body: ["16px", "32px"],
        cta: [
          "15px",
          {
            letterSpacing: "0.05em",
            lineHeight: "16px",
          },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
