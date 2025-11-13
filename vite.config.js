import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Or any folder you want
    sourcemap: false, // Disable source maps in production to protect source code
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  base: "/dev/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
