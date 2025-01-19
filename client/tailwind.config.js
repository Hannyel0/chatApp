/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // This will include all files in src, including components and pages
    './src/components/**/*.{js,jsx,ts,tsx}', // Specifically look into components
    './src/pages/**/*.{js,jsx,ts,tsx}', // Specifically look into pages
  ],
  theme: {
    extend: {
      colors: {
        "primary-a0": "#4c7273",
        "primary-a10": "#486a70",
        "primary-a20": "#47666d",
        "primary-a30": "#445f69",
        "primary-a40": "#435763",
        "primary-a50": "#414f5c",
        "surface-a0": "#121212",
        "surface-a10": "#282828",
        "surface-a20": "#3f3f3f",
        "surface-a30": "#575757",
        "surface-a40": "#717171",
        "surface-a50": "#8b8b8b"

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thumb-rounded': {
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '9999px', // Fully rounded
          },
        },
        '.scrollbar-track-rounded': {
          '&::-webkit-scrollbar-track': {
            borderRadius: '9999px', // Fully rounded track
          },
        },
      });
    }),
  ],
  variants:{
    scrollbar: ["rounded"]
  }
}

