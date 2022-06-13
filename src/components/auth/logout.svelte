<script>
	import { session } from '$app/stores';

	export async function logout() {
		await fetch('/auth/logout', {
			method: 'POST',
			headers: { accept: 'application/json' },
			body: JSON.stringify({
				userId: $session.userId
			})
		});

		session.update(() => null);
	}
</script>

<button on:click={logout}>Sign Out</button>
