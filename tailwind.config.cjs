/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-left-to-right": {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1 },
        },
        "fade-in-right-to-left": {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-left-to-right": "fade-in-left-to-right 0.5s ease-in-out",
        "fade-in-right-to-left": "fade-in-right-to-left 0.5s ease-in-out",
      },
      height: {
        18: "4.5rem",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=cmyk]"],
          primary: "#f9acd9",
          secondary: "#dab6fe",
          neutral: "#161719",
        },
      },
    ],
  },
};
