import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tan: {
          100: '#fdf5e6'
        },
        green: {
          100: '#e6f4e6', // very light green for a subtle touch
          'green-900': '#064e3b', // Dark green color
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
