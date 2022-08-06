import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

const __fileNameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__fileNameNew)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions:['.js','.vue'],
    alias:{
      '@':path.resolve(__dirnameNew,'src'),
      '~':path.resolve(__dirnameNew,'src/views')
    }
  },
  plugins: [vue()]
})
