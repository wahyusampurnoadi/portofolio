/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#00bbf9",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        hp: "320px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
