// tailwind.config.js

const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["{pages,app}/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: {
        light: "#ff9c48",
        DEFAULT: "#ff6a13",
        dark: "#c43800",
      },
      transparent: "transparent",
      current: "currentColor",
      black: "#131313",
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
  corePlugins: {
    scale: true,
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
