import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Set the base path to root for relative paths
  build: {
    outDir: 'build', // Specify the output directory for the build
    chunkSizeWarningLimit: 1000, 
  },
})

