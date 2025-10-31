import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
	site: "https://aucacoyan.com",
	integrations: [mdx(), sitemap()],
	output: "static",
	image: {
		service: passthroughImageService(),
	},
	vite: {
		plugins: tailwindcss(),
	},
});
