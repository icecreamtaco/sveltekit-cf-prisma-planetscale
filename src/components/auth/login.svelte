<script>
	import { authenticate, handleSignMessageRequest } from 'micro-stacks/connect';
	import { v4 as uuidv4 } from 'uuid';
	import { StacksMainnet } from 'micro-stacks/network';
	import { session } from '$app/stores';

	async function login() {
		await authenticate({
			appDetails: {
				name: 'Stacks Dashboard',
				icon: 'https://i.imgur.com/zE88Ouvh.jpg'
			},
			onFinish: (payload) => {
				let stxAddress = payload.addresses.mainnet;
				let privateKey = payload.appPrivateKey;
				openSignatureRequest(stxAddress, privateKey);
			}
		});
	}

	async function openSignatureRequest(stxAddress, privateKey) {
		const nonce = uuidv4();
		const message = `I am signing my one-time nonce for Stacks Dashboard: ${nonce}`;

		await handleSignMessageRequest({
			privateKey,
			stxAddress,
			message: message,
			appDetails: {
				name: 'some test app',
				icon: 'https://i.imgur.com/zE88Ouvh.jpg'
			},
			async onFinish({ signature }) {
				const res = await fetch('/auth/login', {
					method: 'POST',
					headers: { accept: 'application/json' },
					body: JSON.stringify({
						stxAddress,
						message,
						signature
					})
				});
				const user = await res.json();

				if (res.status == '200') {
					$session = user;
				} else {
					console.log('error', user);
				}
			},
			onCancel() {
				console.log('canceled!');
			},
			network: new StacksMainnet()
		});
	}
</script>

<p on:click={login}>
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1.29875 2.84226H11.8124V1.40726C11.8124 1.34252 11.7981 1.27859 11.7704 1.22008C11.7427 1.16156 11.7023 1.10992 11.6523 1.06888C11.6022 1.02784 11.5437 0.998421 11.4809 0.982746C11.418 0.96707 11.3525 0.96553 11.2891 0.978234L1.22656 2.63198C1.15163 2.6469 1.08192 2.68118 1.02435 2.7314C0.966783 2.78163 0.923373 2.84606 0.898438 2.91827C1.02588 2.86789 1.16171 2.84209 1.29875 2.84226Z"
			fill="#2D3748"
		/>
		<path
			d="M12.6738 3.5H1.29883C1.1828 3.5 1.07152 3.54609 0.989469 3.62814C0.907422 3.71019 0.861328 3.82147 0.861328 3.9375V11.8125C0.861328 11.9285 0.907422 12.0398 0.989469 12.1219C1.07152 12.2039 1.1828 12.25 1.29883 12.25H12.6738C12.7899 12.25 12.9011 12.2039 12.9832 12.1219C13.0652 12.0398 13.1113 11.9285 13.1113 11.8125V3.9375C13.1113 3.82147 13.0652 3.71019 12.9832 3.62814C12.9011 3.54609 12.7899 3.5 12.6738 3.5ZM10.0625 8.75C9.88944 8.75 9.72027 8.69868 9.57637 8.60253C9.43248 8.50639 9.32033 8.36973 9.2541 8.20985C9.18788 8.04996 9.17055 7.87403 9.20431 7.70429C9.23807 7.53456 9.32141 7.37865 9.44378 7.25628C9.56615 7.13391 9.72206 7.05057 9.89179 7.01681C10.0615 6.98305 10.2375 7.00038 10.3973 7.0666C10.5572 7.13283 10.6939 7.24498 10.79 7.38887C10.8862 7.53277 10.9375 7.70194 10.9375 7.875C10.9375 8.10706 10.8453 8.32962 10.6812 8.49372C10.5171 8.65781 10.2946 8.75 10.0625 8.75Z"
			fill="#2D3748"
		/>
	</svg>
	Connect Wallet
</p>

<style>
	p {
		display: flex;
		gap: 5px;
		align-items: center;
	}
</style>
