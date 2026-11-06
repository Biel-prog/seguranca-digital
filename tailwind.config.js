/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040915",
          900: "#081126",
          850: "#0d1a38",
          800: "#13234d",
          700: "#1d3268",
          600: "#2a488e",
        },
        cyber: {
          blue: "#38bdf8",
          electric: "#3b82f6",
          accent: "#6366f1",
          glow: "#0284c7",
          emerald: "#10b981",
          crimson: "#ef4444",
          amber: "#f59e0b",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(59, 130, 246, 0.3)",
        "glow-md": "0 0 25px -5px rgba(59, 130, 246, 0.4)",
        "glow-lg": "0 0 40px -10px rgba(59, 130, 246, 0.5)",
        "card-subtle": "0 10px 30px -10px rgba(2, 6, 23, 0.7)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
