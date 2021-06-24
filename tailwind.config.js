// tailwind.config.js

const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: "#ff6a13",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    scale: {
      flip: "-1",
    },
    extend: {
      backgroundImage: (theme) => ({
        "khale-full": "url(/Khale.png)",
      }),
    },
  },
  variants: {
    extend: {
      borderColor: ["target"],
      borderWidth: ["target"],
    },
  },
  plugins: [],
}
