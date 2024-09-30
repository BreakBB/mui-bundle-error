import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // to be readable
    rollupOptions: {
      output: {
        manualChunks: {
          emotionStyled: ["@emotion/styled"],
          emotionReact: ["@emotion/react"],
        }
      },
    },
  },
})
