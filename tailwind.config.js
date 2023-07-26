/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--color-border))",
        ring: "hsl(var(--color-ring))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-accent-foreground))",
        },
        input: {
          DEFAULT: "hsl(var(--color-input))",
          foreground: "hsl(var(--color-input-foreground))",
          placeholder: "hsl(var(--color-input-placeholder))",
          border: "hsl(var(--color-input-border))",
          "border-accent": "hsl(var(--color-input-border-accent))",
          ring: "hsl(var(--color-input-ring))",
        },
        card: {
          DEFAULT: "hsl(var(--color-card))",
          foreground: "hsl(var(--color-card-foreground))",
        },
        error: colors.red,
        success: colors.green,
        info: colors.blue,
        warning: colors.yellow,
      },
      aria: {
        invalid: 'invalid="true"'
      }
    },
  },
  plugins: [],
};
