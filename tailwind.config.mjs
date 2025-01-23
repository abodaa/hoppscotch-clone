/** @type {import('tailwindcss').Config} */
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
        secondarytext: "var(--secondarytext)",
        cardbackground: "var(--cardbackground)",
        primaryaccent: "var(--primaryaccent)",
        secondaryaccent: "var(--secondaryaccent)",
        error: "var(--error)",
        hoverfocus: "var(--hoverfocus)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
