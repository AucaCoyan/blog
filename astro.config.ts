import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://aucacoyan.com",
    integrations: [mdx(), sitemap()],
    output: "static",
    image: {
        service: passthroughImageService(),
    },
});
