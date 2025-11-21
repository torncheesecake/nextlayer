import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true, // Enable source maps for better debugging (PageSpeed recommendation)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into separate chunks
          if (id.includes("node_modules")) {
            // React core
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("scheduler")
            ) {
              return "react-vendor";
            }
            // Icons
            if (id.includes("lucide-react")) {
              return "lucide-vendor";
            }
            // Router
            if (
              id.includes("react-router-dom") ||
              id.includes("react-router") ||
              id.includes("@remix-run")
            ) {
              return "router-vendor";
            }
            // Swiper carousel
            if (id.includes("swiper")) {
              return "swiper-vendor";
            }
            // Everything else
            return "vendor";
          }
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  base: "/dev/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
