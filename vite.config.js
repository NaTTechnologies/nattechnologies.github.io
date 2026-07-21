import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isRootPagesRepository = repositoryName?.toLowerCase().endsWith('.github.io')
const githubBase = isRootPagesRepository ? '/' : repositoryName ? `/${repositoryName}/` : '/'
const base = process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? githubBase : '/')

export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
})
