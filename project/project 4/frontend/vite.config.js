import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  server: {
    strictPort: true,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/javascript",
    },
  },
});
