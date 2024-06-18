import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';

export default {
	input: 'src/app.js',
	output: {
		dir: 'dist',
		format: 'iife',
		assetFileNames: 'assets/bungle.css',
	},
	plugins: [css(), nodeResolve()],
};
