<div class="header-wrapper">
	<div class="header">
		<div>
			<p>
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.53429 0.935059L2.03906 7.44482L1.5 8.49951L2.55445 7.96045L9.06445 1.46521L8.53429 0.935059Z"
						stroke="#805AD5"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Complete Your Profile
			</p>
		</div>
		<div class="complete-profile-wrapper">
			<div class="profile-header">
				<div>
					<h1>complete your profile</h1>
					<p class="sub-heading">Introduce yourself to the Stacks Community. (* required fields)</p>
				</div>
				<div>
					<div>
						<svg
							width="144"
							height="144"
							viewBox="0 0 144 144"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="144" height="144" fill="white" fill-opacity="0.04" />
							<path
								d="M104 112H40V104C40 98.6957 42.1071 93.6086 45.8579 89.8579C49.6086 86.1071 54.6957 84 60 84H84C89.3043 84 94.3914 86.1071 98.1421 89.8579C101.893 93.6086 104 98.6957 104 104V112ZM72 76C68.8483 76 65.7274 75.3792 62.8156 74.1731C59.9038 72.967 57.258 71.1992 55.0294 68.9706C52.8008 66.742 51.033 64.0962 49.8269 61.1844C48.6208 58.2726 48 55.1517 48 52C48 48.8483 48.6208 45.7274 49.8269 42.8156C51.033 39.9038 52.8008 37.258 55.0294 35.0294C57.258 32.8008 59.9038 31.033 62.8156 29.8269C65.7274 28.6208 68.8483 28 72 28C78.3652 28 84.4697 30.5286 88.9706 35.0294C93.4714 39.5303 96 45.6348 96 52C96 58.3652 93.4714 64.4697 88.9706 68.9706C84.4697 73.4714 78.3652 76 72 76V76Z"
								fill="#718096"
							/>
						</svg>
						<button> Upload Avatar </button>
					</div>
				</div>
			</div>
			<div class="input-field-wrapper">
				<div class="input-field">
					<label for="first-name">First Name <sup>*</sup></label>
					<input id="first-name" placeholder="Type here..." />
				</div>
				<div class="input-field">
					<label for="last-name">First Name <sup>*</sup></label>
					<input id="last-name" placeholder="Type here..." />
				</div>
			</div>

			<div class="input-field-wrapper">
				<div class="input-field">
					<label for="user-name">User Name <sup>*</sup></label>
					<input id="user-name" placeholder="Type here..." />
				</div>
				<div class="input-field">
					<label for="Email">Email <sup>*</sup></label>
					<input id="email" placeholder="Type here..." />
				</div>
			</div>

			<div class="input-field-wrapper">
				<div class="input-field">
					<label for="discord-connect">Discord Connect<sup>*</sup></label>
					<input id="discord-connect" placeholder="Type here..." />
				</div>
				<div class="input-field">
					<label for="github-connect">Github Connect <sup>*</sup></label>
					<input id="github-connect" placeholder="Type here..." />
				</div>
				<div class="input-field">
					<label for="twitter-connect">Twitter Connect <sup>*</sup></label>
					<input id="twitter-connect" placeholder="Type here..." />
				</div>
			</div>

			<div class="input-field-wrapper wallet-address">
				<div class="input-field">
					<label for="stx-wallet-address">STX Wallet Address <sup>*</sup></label>
					<input id="stx-wallet-address" placeholder="Type here..." />
				</div>
				<div class="input-field memo">
					<label for="stx-wallet-memo">STX Wallet Memo <sup>*</sup></label>
					<input id="stx-wallet-memo" placeholder="Type here..." />
				</div>
			</div>
			<div class="no-memo">
				<input type="checkbox" id="no-memo" /><label for="no-memo"
					>I confirm no memo is required for the wallet address proved.</label
				>
			</div>
		</div>

		<div class="ok-button">
			<p>
				<svg
					width="13"
					height="10"
					viewBox="0 0 13 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.5 0.999512L4.5 8.99951L1.5 5.99951"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>Ok
			</p>
		</div>
	</div>
</div>

<style>
	.header-wrapper {
		display: flex;
	}

	.header {
		display: flex;
		width: 100%;
	}

	.header div:first-child p {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 0 5px;
	}

	.ok-button {
		width: 200px;
		height: 50px;
		background: linear-gradient(45deg, #3182ce, #97266d);
		border: 1px solid white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header div:nth-child(3) p {
		font-size: 14px;
		display: flex;
		gap: 5px;
		align-items: center;
	}

	h1 {
		text-transform: capitalize;
		padding-bottom: 10px;
		font-weight: 400;
	}

	.sub-heading {
		padding-bottom: 10px;
		color: rgba(255, 255, 255, 0.48);
	}

	.complete-profile-wrapper {
		width: 800px;
		height: 100%;
		background: #000000;
		margin: auto;
	}

	.profile-header {
		display: flex;
		justify-content: space-between;
	}

	.profile-header div:nth-child(2) div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.profile-header div:nth-child(2) div button {
		background: #171923;
		border: none;
		border-radius: 5px;
		color: white;
		font-size: 12px;
		height: 50px;
		cursor: pointer;
	}

	.input-field-wrapper {
		display: flex;
		gap: 15px;
		padding: 20px 0;
	}

	.input-field {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	label {
		font-size: 12px;
	}

	input {
		background: rgba(0, 0, 0, 0.48);
		border: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.8);
		color: #ffffff;
		height: 50px;
		font-size: 14px;
	}

	input::placeholder {
		padding: 5px 0;
	}

	.wallet-address {
		width: 100%;
	}

	.memo {
		width: 60%;
	}

	.no-memo {
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
