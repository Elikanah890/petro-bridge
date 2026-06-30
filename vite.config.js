import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
                        return 'vendor';
                    }
                    if (id.includes('node_modules/framer-motion') || id.includes('node_modules/gsap')) {
                        return 'animations';
                    }
                    if (id.includes('node_modules/@radix-ui')) {
                        return 'ui';
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
    server: {
        port: 5173,
        open: true,
    },
});
