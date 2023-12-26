import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import imageEndpoint from 'astro-https-image-endpoint'
import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://aucacoyan.com",
    integrations: [mdx(), sitemap(), tailwind()],
  image: {
    endpoint: imageEndpoint(import.meta.env.DEV),
  },
});

