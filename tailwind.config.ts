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
        white: "#ffffff",
        black: "#313131",
        fullblack: "#000000",
        main: "#499eb1",
        second: "#4dbfb4",
      },
      backgroundImage: {
        pageBg: "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
