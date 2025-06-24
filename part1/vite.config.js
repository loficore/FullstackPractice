import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,      // 或者你使用的端口号，如 5173
    allowedHosts: ['3000.app.cloudstudio.work'] // 添加这一行，放行指定域名
  }
})
