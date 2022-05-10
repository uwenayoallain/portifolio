module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        italic: "italic 1s ease-in-out infinite",
        hover: "hover 1s ease-in-out infinite",
      },
      keyframes: {
        italic: {
          "0%, 100%": { transform: "skew(0deg)" },
          "30%": { transform: "skew(8deg)" },
          "60%": { transform: "skew(-8deg)" },
        },
        hover: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(2px)" },
        },
      },
    },
  },
  plugins: [],
};
