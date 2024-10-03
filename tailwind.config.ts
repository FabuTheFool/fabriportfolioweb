import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      keyframes: {
        "pulse-white": {
          "0%": {
            transform: "scale(0.95)",
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.7)",
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 10px rgba(255, 255, 255, 0)",
          },
          "100%": {
            transform: "scale(0.99)",
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)",
          },
        },
      },
      animation: {
        "pulse-white": "pulse-white 3s infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      textColor: ["hover"],
    },
  },
  plugins: [],
};

export default config;
