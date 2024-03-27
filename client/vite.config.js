import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiBaseUrl = 'http://localhost:8088';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3003,
    host: '0.0.0.0',
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
