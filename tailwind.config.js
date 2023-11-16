/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cubano: "Cubano",
        jet: "JetBrains Mono",
      },
      colors: {
        text: "#f4f4f5",
        background: "#18181b",
        primary: "#16a34a",
        secondary: "#27272a",
        accent: "#7B7DEA",
        gray: "#A1A1AA",
        dark: "#09090B",
      },
    },
  },
  plugins: [],
};
