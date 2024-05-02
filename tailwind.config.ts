import type {Config} from "tailwindcss"
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
				fade: 'fadeIn 1s ease-in-out',
			},
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
        'noto-sans': ["var(--font-noto-sans)"],
        chulalongkorn: ["var(--font-chulalongkorn)"],
      },
      keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
      padding: {
        '4/3': '133.33%',
        '9/16': '56.25%',
        '4/5': '80%',
        full: '100%',
      },
      objectPosition: {
        'center-bottom': 'center bottom',
        home: '50% 80%',
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}
export default config
