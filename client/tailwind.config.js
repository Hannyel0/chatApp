/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // This will include all files in src, including components and pages
    './src/components/**/*.{js,jsx,ts,tsx}', // Specifically look into components
    './src/pages/**/*.{js,jsx,ts,tsx}', // Specifically look into pages
  ],
  theme: {
    extend: {
      colors: {
        "primary-a0": "#535a9f",
        "primary-a10": "#676baa",
        "primary-a20": "#7a7cb4",
        "primary-a30": "#8d8dbf",
        "primary-a40": "#9f9fc9",
        "primary-a50": "#b2b2d4",
        "surface-a0": "#121212",
        "surface-a10": "#282828",
        "surface-a20": "#3f3f3f",
        "surface-a30": "#575757",
        "surface-a40": "#717171",
        "surface-a50": "#8b8b8b"

      }
    },
  },
  plugins: [],
}

