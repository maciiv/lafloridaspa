import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5001,
        https: true,
        strictPort: true,
        proxy: {
            "/api": {
                target: "http://localhost:44358",
                changeOrigin: true,
                secure: false
            }
        }
    }
})