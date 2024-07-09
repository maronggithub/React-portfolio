import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.zip"],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "@": path.resolve(__dirname, "src"),
      // 这里的 @ 就是我们要为 src 配置的别名
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  publicDir: "public",
  server: {
    port: 8080,
    hot: true,
  },
  base: "./",
});
