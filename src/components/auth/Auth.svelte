<script>
	import { session } from '$app/stores';

	import Login from './Login.svelte';
	import Logout from './Logout.svelte';
</script>

<div>
	{#if !$session}
		<Login />
	{/if}
	{#if $session}
		<Logout />
	{/if}
</div>
