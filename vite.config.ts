import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/punya-portfolio/',
  plugins: [react()]
})