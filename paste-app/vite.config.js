import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'src', // Set the root to 'src' folder
  plugins: [react()],
  build: {
    outDir: '../dist', // Specify output directory outside 'src'
    emptyOutDir: true,  // Empty the outDir before building
  },
})
