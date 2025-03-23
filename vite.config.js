import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "three"; // Separate Three.js
            if (id.includes("framer-motion")) return "framer"; // Separate animations
            return "vendor"; // Separate all other dependencies
          }
        },
      },
    },
  },
});
