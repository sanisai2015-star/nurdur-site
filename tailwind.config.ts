import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { blue: "var(--blue-main)", gold: "var(--gold-accent)" }
      }
    }
  },
  plugins: [],
} satisfies Config;
