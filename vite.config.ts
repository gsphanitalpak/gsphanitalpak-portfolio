import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gsphanitalpak-portfolio/',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    assetsDir: 'public',
  },
  assetsInclude: ['**/*.md'],
  server: {
    host: '::', // Optional: allows the server to accept all IP addresses
    port: 3000, // Adjust the port if necessary for local development
  },
});
