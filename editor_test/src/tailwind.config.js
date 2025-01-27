/** @type {import('@tailwindcss/cli').Config} */

const config = {
  content: ["./**/*.{html, js}", "!./node_modules"],
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
