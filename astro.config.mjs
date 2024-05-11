import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://classy-snickerdoodle-756b8f.netlify.app/",
  integrations: [preact()]
});