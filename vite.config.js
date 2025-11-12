import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/' or './' to match how you deploy
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  server: { hot: true },
})
