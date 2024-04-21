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
      },
      screens: {
        'sp': {'max': '480px'},  // 468px以下のデバイス用ブレイクポイントを追加
        '600': {'max': '600px'}, 
        'ss': {'max': '375px'}, 
      },
      width: {
        '80vw': '80vw',
      }
    },
  },
  plugins: [],
};
export default config;
