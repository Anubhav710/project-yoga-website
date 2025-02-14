import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-green": "#3E4939",
      },
      clamp: (min: string, preferred: string, max: string): string =>
        `clamp(${min}, ${preferred}, ${max})`,
      screens: {
        desktop: { min: "768px", max: "992px" },
        desktopmd: { min: "992px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
