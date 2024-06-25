/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode via a class
  theme: {
    extend: {
      // Custom dark mode color settings
      colors: {
        dark: {
          background: "#1a1a1a",
          text: "#e5e5e5",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
