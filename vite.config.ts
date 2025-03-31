import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html',
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