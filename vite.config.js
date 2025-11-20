import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect si on compile pour GitHub Pages
const isGithub = process.env.GITHUB === 'true'

export default defineConfig({
  base: isGithub ? '/ReactProject1/' : '/',
  plugins: [react()],
})
