/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        african_violet: "#A67DB8",
        mint_cream: "#EFF6EE",
        dark_purple: "#361D2E",
        night: "#0F0F0F",
        licorice: "#44263A",
      },
    },
  },
  plugins: [],
};
