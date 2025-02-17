import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const __filename = new URL('', import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
})
