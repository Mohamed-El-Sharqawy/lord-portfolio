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
        arial: ["Arial", "sans-serif"],
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
      backgroundImage: {
        noise: "url('/imgs/noise.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
