import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'prop from App'
	}
});

export default app;