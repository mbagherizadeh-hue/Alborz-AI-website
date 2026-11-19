import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts", "./config/**/*.ts"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 500: "#f97316", 600: "#ea580c", 700: "#c2410c" },
        navy: { 700: "#1e2f55", 800: "#15233f", 900: "#0f1a30" },
      },
      fontFamily: { sans: ["var(--font-vazir)", "Tahoma", "sans-serif"] },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
export default config;
