import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		target: ['es2015'],
	},
	define: {
		'import.meta.env.PKGVERSION': JSON.stringify(pkg.version),
	},
});
