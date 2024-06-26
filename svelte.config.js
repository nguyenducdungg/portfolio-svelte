import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		seqPreprocessor([
				preprocess({
					scss:{
						prependData: "@import './src/styles/global.scss';"
					}
				}),
				preprocessThrelte(),
			]),
		vitePreprocess()],
	kit: {
		adapter: adapter()
	}
};

export default config;
