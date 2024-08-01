import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8080/", // Replace with your backend server address
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 5173,
    open: true,
  },
  plugins: [react()],
});
