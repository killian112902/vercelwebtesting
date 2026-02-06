import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // only change base if you intend to serve from a subpath
  // base: '/my-subpath/'
})
