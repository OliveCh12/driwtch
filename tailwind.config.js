const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      teal: colors.teal,
      red: colors.rose,
      pink: colors.pink,
      purple: colors.purple,
      yellow: colors.amber,
      blue: colors.blue,
      primary: {
        300: "#661F41",
        400: "#B30056",
        500: "#4576ff",
        600: "#4576ff",
        DEFAULT: "#4576ff",
      },
      light: {
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        DEFAULT: "#fff",
      },
      dark: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#222831",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
    fontFamily: {
      sans: ["Roboto Condensed", "system-ui"],
      cursive: "Modak",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
