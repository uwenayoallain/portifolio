module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        italic: "italic 1s ease infinite",
      },
      keyframes: {
        italic: {
          "0%, 100%": { transform: "skew(0deg)" },
          "30%": { transform: "skew(10deg)" },
          "60%": { transform: "skew(-10deg)" },
        },
      },
    },
  },
  plugins: [],
};
