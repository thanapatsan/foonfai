const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.gray,

      red: colors.red,
      yellow: colors.yellow,
      orange: colors.orange,
      green: colors.green,
      blue: colors.blue,
      purple: colors.violet,

      primary: colors.sky,
      secondary: colors.green,

    },
    fontFamily: {
      sans: ["Bai Jamjuree", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
