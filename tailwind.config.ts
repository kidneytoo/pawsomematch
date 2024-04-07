import type {Config} from "tailwindcss"

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
      backgroundColor: {
        result: "#F1B6A1",
      },
      colors: {
        brown: {
          bg: '#583A32',
          text: '#4F2D27',
          'text-light': '#79473E',
        }
      },
      fontFamily: {
        chulacharas: ["var(--font-chula-charas)"],
        chulalongkorn: ["var(--font-chulalongkorn)"],
      },
      padding: {
        '4/3': '133.33%',
        '9/16': '56.25%',
        full: '100%',
      },
    },
  },
  plugins: [],
}
export default config
