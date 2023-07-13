/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        "foreground-muted":
          "rgb(var(--color-foreground-muted) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-foreground":
          "rgb(var(--color-primary-foreground) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-foreground":
          "rgb(var(--color-secondary-foreground) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        "border-vivid": "rgb(var(--color-border-vivid) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-foreground":
          "rgb(var(--color-accent-foreground) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        ring: "rgb(var(--color-ring) / <alpha-value>)",
        input: "rgb(var(--color-input) / <alpha-value>)",
        "input-foreground":
          "rgb(var(--color-input-foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
