import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        loginBg: "url('/assets/login/flower.png')",
        signBg: "url('/assets/login/man.png')",
        texture: "url('/assets/login/texture.jpeg')",
      },
      fontFamily: {
        sans: "var(--normal-font)",
        title: "var(--title-font)",
      },
    },
  },
  plugins: [],
};
export default config;
