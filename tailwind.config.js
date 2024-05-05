/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
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
        mainbkgcolor: "hsl(var(--color-mainbkgcolor) / <alpha-value>)",
        bkgcolor: "hsl(var(--color-bkgcolor) / <alpha-value>)",
        txtcolor: 'hsl(var(--color-txtcolor) / <alpha-value>)',
      },
  },
  },
  plugins: [],
};
