/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            boxShadow: { semiXL: "0 4px 12px 0 rgba(0,0,0,.12)" },
            animation: {
                "say-hi": "spin 3s linear infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
