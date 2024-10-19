import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
      colors: {
        wheat: "#DAC5A7",
      },
      textColor: {
        black: "#0E0E0E",
      },
      backgroundColor: {
        main: "#0E0E0E",
      },
    },
  },
  plugins: [],
};
export default config;
