/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#2C2C2C",
        tertiary: "#181818",
        textPrimary: "#CECECE",
      },
    },
  },
  plugins: [],
};
