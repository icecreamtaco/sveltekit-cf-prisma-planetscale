<script>
	import '$root/styles/styles.scss';
	import { session } from '$app/stores';

	import Nav from '$root/components/navigation/Nav.svelte';
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<Nav />

<slot />

<!-- <Footer /> -->
