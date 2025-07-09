/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB", // blue-600
          secondary: "#1E293B", // slate-800
          accent: "#38BDF8", // sky-400
          muted: "#64748B", // slate-500
          light: "#F8FAFC", // gray-50
          dark: "#0F172A", // slate-900
          danger: "#EF4444", // red-500
          success: "#10B981", // green-500
          warning: "#F59E0B", // yellow-500
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ['"Poppins"', "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 2px 10px rgba(0, 0, 0, 0.06)",
        innerSoft: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
