<script>
	import NavLinks from './navLinks.svelte';
</script>

<nav>
	<NavLinks />
</nav>

<style>
	@media (max-width: 1024px) {
		nav {
			display: none;
		}
	}
</style>
