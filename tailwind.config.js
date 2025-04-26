import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "custom-light-blue": "#81A5B8",
        "custom-green": "#16a085",
        "custom-orange": "#f39c12",
        "darker-black": "#222222",
        "custom-reddish-pink": "#F76A73",
        "custom-dark-blue": "#4392AC",
        "custom-light-sky-blue": "#E6F9FD",
        "custom-grey": "#666666",
        "custom-yellow-white": "#FAF9F6",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), require("@tailwindcss/typography")],
};
