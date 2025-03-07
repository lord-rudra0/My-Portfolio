import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // ✅ Add this line to fix import alias issues
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true
  }
});
