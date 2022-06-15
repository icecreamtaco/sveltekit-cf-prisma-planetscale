<script>
	import { session } from '$app/stores';

	import Login from './login.svelte';
	import Logout from './logout.svelte';
</script>

<button>
	{#if !$session}
		<Login />
	{/if}
	{#if $session}
		<Logout />
	{/if}
</button>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160px;
		border: 1px solid #2d3748;
		height: 32px;
		background: none;
		color: #2d3748;
		border-radius: 20px;
		cursor: pointer;
	}

	button:hover {
		color: white;
		border: 1px solid white;
		transition: 0.4s;
	}
</style>
