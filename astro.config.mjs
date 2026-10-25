// @ts-check
import { defineConfig } from 'astro/config';
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";

import react from "@astrojs/react";
import cloudProviderFetchAdapter from "@wix/cloud-provider-fetch-adapter";
const isBuild = process.env.NODE_ENV == "production";

// https://astro.build/config
// Note: wix() htmlEmbeds injects site scripts (SEO, analytics) including the
// "Built on Wix Headless" BODY_START badge on *.wix-site-host.com. Do not set
// htmlEmbeds: false (would drop SEO embeds). The badge is stripped in
// SiteLayout + hidden via #wixheadless-banner-container in global.css.
export default defineConfig({
  integrations: [wix(), wixPages(), react()],
  security: { checkOrigin: false },
  ...(isBuild && { adapter: cloudProviderFetchAdapter({}) }),

  image: {
    domains: ["static.wixstatic.com"],
  },

  output: "server",
});