import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://aucacoyan.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  adapter: vercel(),
  image: {
    service: passthroughImageService()
  }
});