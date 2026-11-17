import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    react(),
    mode === 'publish' && viteSingleFile({ removeViteModuleLoader: true })
  ],
  build: {
    assetsInlineLimit: mode === 'publish' ? 100000000 : 4096,
    chunkSizeWarningLimit: 2000
  }
}))
