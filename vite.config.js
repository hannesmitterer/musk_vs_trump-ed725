import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/musk_vs_trump-ed725/', // Base path for GitHub Pages
})