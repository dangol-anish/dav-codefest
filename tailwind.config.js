/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.stone[300]"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-lead": theme("colors.stone[400]"),
            "--tw-prose-links": theme("colors.blue[400]"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-counters": theme("colors.stone[400]"),
            "--tw-prose-bullets": theme("colors.blue[400]"),
            "--tw-prose-hr": theme("colors.stone[700]"),
            "--tw-prose-quotes": theme("colors.stone[100]"),
            "--tw-prose-quote-borders": theme("colors.blue[500]"),
            "--tw-prose-captions": theme("colors.stone[400]"),
            "--tw-prose-code": theme("colors.white"),
            "--tw-prose-pre-code": theme("colors.stone[300]"),
            "--tw-prose-pre-bg": theme("colors.stone[900]"),
            "--tw-prose-th-borders": theme("colors.stone[600]"),
            "--tw-prose-td-borders": theme("colors.stone[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
