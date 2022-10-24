/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: { semiXL: "0 4px 12px 0 rgba(0,0,0,.12)" },
      animation: {
        "say-hi": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
