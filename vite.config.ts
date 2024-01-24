import { defineConfig } from 'vite'
import tailwindcss  from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  }
})
