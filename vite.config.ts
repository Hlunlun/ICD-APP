import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  build:{
    outDir: 'dist-react'
  },
  server: {
      port: 5173,
      strictPort: true
  }
})
