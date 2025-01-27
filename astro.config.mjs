import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import { SITE } from "./src/config.mjs";
import mdx from "@astrojs/mdx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.origin,
  base: SITE.basePathname,
  output: "static",
  integrations: [
    {
      name: "netlify-redirects",
      hooks: {
        "astro:config:setup": ({ injectRoute }) => {
          injectRoute({
            pattern: "/_redirects",
            entryPoint: "./src/pages/_redirects.js",
          });
        },
      },
    },
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(), // partytown({
    //   config: { forward: ["dataLayer.push"] },
    // }),
    image(),
  ],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
