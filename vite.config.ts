import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Beautica-Beauty-Colour/" : "/",
  server: {
    host: "0.0.0.0", 
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:5000", 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Pastikan ini sesuai struktur folder
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'], // Opsional untuk fleksibilitas
  },
}));
