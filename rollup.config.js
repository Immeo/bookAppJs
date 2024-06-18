import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';

export default {
	input: 'src/app.js',
	output: {
		dir: 'dist',
		format: 'iife',
	},
	plugins: [css({ output: 'bundle.css' }), nodeResolve()], // css({ output: 'bundle.css' }) creates a single css file without a hash in the name
};
