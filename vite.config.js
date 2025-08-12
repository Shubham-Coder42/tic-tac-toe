import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tic-tac-toe/',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  server: {
    host: true, // Allow access from mobile devices on same network
    port: 3000
  }
})
