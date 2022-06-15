<script>
	import { session } from '$app/stores';

	import Nav from '$root/components/navigation/nav.svelte';
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>
<header>
	<Nav />
</header>
<slot />
<!-- <footer>
<Footer />
</footer> -->
