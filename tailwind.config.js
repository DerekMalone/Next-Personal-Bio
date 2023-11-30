/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-slate": "#64748B",
        "primary-green": "#748B64",
        "secondary-slate": "#7F8EA3",
        "primary-burgandy": "#8B6474",
        "zinc-font": "#D9D9D9",
        "yellow-accent": "#FFFF00",
      },
    },
  },
  plugins: [],
};
