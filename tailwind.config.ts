import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-quicksand)'],
        body: ['var(--font-poppins)']
      },
      colors: {
        primary: '#7b03b8',
        dark: '#111111',
        light: '#adaaaa'
      }
    },
  },
  plugins: [],
};
export default config;
