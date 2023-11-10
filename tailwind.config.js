/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shippori: ["Shippori Mincho", "serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        my: "0 0 1rem 0.1rem var(--shadow)",
      },
    },
  },
  plugins: [],
};
