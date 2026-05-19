import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Change base to match your GitHub repo name for GitHub Pages
// e.g. '/portfolio/' for username.github.io/portfolio
// Use '/' for local development at http://localhost:5173/
export default defineConfig(({ mode }) => ({
  base: mode === 'ghpages' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
