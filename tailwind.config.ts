import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        engel: {
          50: "#fdf8f6",
          100: "#f7eae5",
          200: "#e9d0c8",
          300: "#d1aa9b",
          400: "#b27b67",
          500: "#8c553e",
          600: "#6c3d2a",
          700: "#4d2a1b",
          800: "#321a10",
          900: "#1d0e07",
          custom: "#b59d85", // 사용자 정의 브라운 색상
        },
        customGray: "rgb(243, 243, 239)", // 커스텀 색상 정의
        customBrown: "rgb(72,54,41)",
        customBeige: "rgb(220,215,203)",
      },
    },
  },
  plugins: [],
};
export default config;
