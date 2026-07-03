/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "var(--cream)",
        beige: "var(--beige)",
        paper: "var(--paper)",
        rose: "var(--rose)",
        "rose-deep": "var(--rose-deep)",
        gold: "var(--gold)",
        "gold-soft": "var(--gold-soft)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        border: "var(--border)",
        "primary-foreground": "var(--primary-foreground)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(60,40,30,0.18)",
        paper:
          "0 2px 6px -2px rgba(60,40,30,0.14), 0 18px 40px -20px rgba(60,40,30,0.22)",
      },
    },
  },
  plugins: [],
};
