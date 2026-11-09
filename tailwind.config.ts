import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        turquesa: {
          DEFAULT: "#0E7C86",
          light: "#14B8C4",
        },
        areia: "#F5EFE6",
        laranja: "#F2913D",
        grafite: "#2B2B2B",
      },
    },
  },
  plugins: [],
} satisfies Config;
