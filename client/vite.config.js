import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: process.env.REACT_APP_API_BASE_URL, // No quotes here
        changeOrigin: true,
        secure: false,
        // We can even re-write the request
        rewrite: path => path.replace('/api', ''),
      }
    }
  },
})
