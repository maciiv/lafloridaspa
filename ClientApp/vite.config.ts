import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mkcert()],
    server: {
        port: 3001,
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
