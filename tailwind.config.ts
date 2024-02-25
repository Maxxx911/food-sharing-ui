import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "prim-color": "var(--prim-color)",
        "pot-pourri-color": "var(--pot-pourri-color)",
        "feta-color": "var(--feta-color)",
        "linen-color": "var(--linen-color)",
        "aqua-haze-color": "var(--aqua-haze-color)",
        "linen-dark-color": "var(--linen-dark-color)",
        "polar-color": "var(--polar-color)",
        "selago-color": "var(--selago-color)",
        "mine-shaft-color": "var(--mine-shaft-color)",
        "whit-color": "var(--white-color)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
