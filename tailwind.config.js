/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mainbkgcolor': '#0C0E13',
        'mainbkgcolorlight': '#6378AB',
        'bkgcolor': '#131720',
        'bkgcolorlight': '#D6E5FF',
        'txtcolor': '#FFFFFF',
        'txtcolorlight': '#1E1F1F',
        'buttonnaccent': '#FFD700',
      },
  },
  },
  plugins: [],
};
