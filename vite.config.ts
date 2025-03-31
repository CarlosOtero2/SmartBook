import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_APP_ENV === 'production' ? '/plataforma-smart-book/' : '/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      external: ['react', 'react-dom']
    },
    manifest: true,
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true
  }
});