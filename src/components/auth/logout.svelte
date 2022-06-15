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

	let walletAddress = $session.stxAddress.slice(0, 4) + '...' + $session.stxAddress.slice(-4);
</script>

<p on:click={logout}>{walletAddress}</p>
