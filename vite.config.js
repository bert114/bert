import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bert/",

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Change this to your real API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
