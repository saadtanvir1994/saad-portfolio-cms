import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"nortica"', "nortica Fallback"],
      },
      borderWidth: {
        xs: ".6px",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-slow2": "spin 16s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      screens: {
        "exact-md": "768px",
        "exact-2xl": "1920px",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(98.24deg, #56C1E3 0%, #5B6AF0 100%)",
        "gradient-orange":
          "linear-gradient(98.24deg, #FFB36D 0%, #EC5353 100%)",
        "gradient-purple":
          "linear-gradient(98.24deg, #6C2DD1 0%, #FF7DBC 100%)",
        "gradient-white-light":
          "linear-gradient(90deg, #F3F7FA 10.94%, rgba(243, 247, 250, 0) 100%)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "100%",
          "exact-md": "90%",
          "exact-2xl": "70%",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          [`@media (min-width: 768px)`]: {
            width: "90%",
          },
          [`@media (min-width: 1920px)`]: {
            width: "80%",
          },
        },
      });
    }),
  ],
} satisfies Config;
