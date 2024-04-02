import react from '@vitejs/plugin-react'
import stylin from '@stylin/vite-plugin'
import stylinTS from '@stylin/vite-plugin/ts'
import {defineConfig} from 'vite'
import {resolve} from 'path'

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [stylin(), stylinTS(), react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, `./src`),
    },
  },
})
