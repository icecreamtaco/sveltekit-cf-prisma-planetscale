<script>
	import { session } from '$app/stores';
	import { user } from '$lib/stores.js';

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
	let userObj = JSON.parse($user);
	let mainnetAddress = userObj.addresses.mainnet;
	let walletAddress = mainnetAddress.slice(0, 4) + '...' + mainnetAddress.slice(-4);
</script>

<p on:click={logout}>{walletAddress}</p>
