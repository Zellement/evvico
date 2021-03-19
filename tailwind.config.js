module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontSize: {
      xs: "1.4rem",
      sm: "1.6rem",
      base: "1.8rem",
      lg: "2rem",
      xl: "2.2rem",
      "2xl": [
        "2.8rem",
        {
          lineHeight: "42px",
        },
      ],
      "3xl": "3.2rem",
      "4xl": "4rem",
      "5xl": "5rem",
      "6xl": [
        "6rem",
        {
          lineHeight: "70px",
        },
      ],
      "7xl": "7rem",
      "8xl": "8rem",
      "9xl": "9rem",
      "10xl": "10rem",
    },
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1900px",
    },
    filter: {
      none: "grayscale(0)",
      grayscale: "grayscale(1)",
    },
    fontFamily: {
      sans: [
        'Roboto Condensed',
      ],
    },
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      inset: (theme, { negative }) => ({
        full: "100%",
        "1/2": "50%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        25: "25vh",
        50: "50vh",
        75: "75vh",
      }),
      colors: {
        blue: {
          DEFAULT: "#00497B",
          50: "#62BFFF",
          100: "#9DD7FF",
          200: "#15A0FF",
          300: "#0086E1",
          400: "#0067AE",
          500: "#00497B",
          600: "#002B48",
          700: "#000C15",
          800: "#000000",
          900: "#000000",
        },
        gray: {
          DEFAULT: "#888888",
          50: "#FBFBFB",
          100: "#EEEEEE",
          200: "#D5D5D5",
          300: "#BBBBBB",
          400: "#A2A2A2",
          500: "#888888",
          600: "#6F6F6F",
          700: "#555555",
          800: "#3C3C3C",
          900: "#222222",
        },
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      linearGradientColors: {
        "green-green-dark": ["#387B37", "#1B301B"],
        "blue-blue-dark": ["#4E899E", "#074156"],
      },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "group-hover",
      "hover",
      "focus",
      "group-focus",
    ],
    textColor: ["responsive", "group-hover", "hover", "focus", "group-focus"],
    padding: ["responsive", "group-hover", "hover", "focus", "group-focus"],
  },
  corePlugins: {
    container: false,
  },
}
