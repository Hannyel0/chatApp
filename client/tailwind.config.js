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
        "background-gray": "#242424",
        "background-gray-light": "#2C2C2C"

      }
    },
  },
  plugins: [],
}

