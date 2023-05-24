<script>
	export const prerender = true;
	import '../styles/app.css';
	import Header from '$lib/header/Header.svelte';
</script>

<Header />
<slot />
