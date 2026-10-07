import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Pour GitHub Pages dans un sous-dossier, décommente et adapte :
  base: '/portfolio-djibril/',
})
