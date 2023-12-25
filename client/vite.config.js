import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiBaseUrl = 'http://localhost:8088';

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: apiBaseUrl,
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api', ''),
      }
    }
  },
});
