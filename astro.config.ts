import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import imageEndpoint from "astro-https-image-endpoint";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://aucacoyan.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  image: {
    endpoint: imageEndpoint(import.meta.env.DEV)
  },
  adapter: vercel()
});