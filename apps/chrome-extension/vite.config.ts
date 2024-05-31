import { defineConfig } from "vite";
import { ManifestV3Export, crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest: manifest as ManifestV3Export})],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
