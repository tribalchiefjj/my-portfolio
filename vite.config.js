import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/desktop_pc/**/*",
          dest: "desktop_pc",
        },
        {
          src: "public/planet/**/*",
          dest: "planet",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "three";
            if (id.includes("framer-motion")) return "framer";
            return "vendor";
          }
        },
      },
    },
  },
});
