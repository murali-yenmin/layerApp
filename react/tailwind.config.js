/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60A5FA",
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
        secondary: {
          light: "#4ADE80",
          DEFAULT: "#22C55E",
          dark: "#16A34A",
        },
        accent: {
          DEFAULT: "#F59E0B",
        },
        neutral: {
          light: "#F3F4F6",
          DEFAULT: "#6B7280",
          dark: "#1F2937",
        },
      },
    },
  },
  plugins: [],
};
