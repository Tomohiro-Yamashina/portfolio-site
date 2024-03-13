import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	publicDir: 'public',
	build: {
		rollupOptions: {
			output: {
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
						return 'assets/images/[name]-[hash][extname]';
					}
					return 'assets/[ext]/[name]-[hash][extname]';
				},
			},
		},
	},
	css: {
		devSourcemap: true,
	},
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
