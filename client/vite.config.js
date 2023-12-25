import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const apiBaseUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_BASE_URL
  : 'http://localhost:8088';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: apiBaseUrl,
        changeOrigin: true,
        secure: false,
        // Conditionally re-write the request if NODE_ENV is production
        rewrite: path => process.env.NODE_ENV === 'production' ? path : path.replace('/api', ''),
      }
    }
  },
});
