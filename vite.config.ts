import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // On build (production deployment), base is '/4J4AKADEMI/'.
  // On serve (npm run dev on localhost), base is '/' so local dev stays at http://localhost:5173/
  base: command === 'build' ? '/4J4AKADEMI/' : '/',
  server: {
    port: 5173,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200
  }
}));
