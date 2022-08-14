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
  plugins: [vue()],
  build:{
    lib:{
      entry: path.resolve(__dirnameNew, 'src/index.js'),
      name: 'vue3-uploader',
      fileName: (format) => `vue3-uploader.${format}.js`
    },
    sourcemap: true,
    rollupOptions:{
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
