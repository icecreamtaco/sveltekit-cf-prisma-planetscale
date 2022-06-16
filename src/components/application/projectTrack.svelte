<div class="header-wrapper">
	<div class="header">
		<div>
			<p>
				<svg
					width="10"
					height="8"
					viewBox="0 0 10 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.75 0.999756L3.5 6.99976L1.25 4.74976"
						stroke="#68D391"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				Complete Your Profile
			</p>
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
			<p>Project Type</p>
			<p>Project Track</p>
			<p>Project Tags</p>
			<p>Project Name, Budget & Duration</p>
		</div>
		<div class="project-role-wrapper">
			<h1>project track</h1>
			<p class="sub-heading">Select all of the project tracks below that apply to your project.</p>
			<div class="roles">
				<div class="col">
					<div>
						<input type="checkbox" id="stacks-protocol" /><label for="stacks-protocol"
							>Project Lead</label
						>
						<p>Stacks Protocol</p>
					</div>
					<div>
						<input type="checkbox" id="stacks-interface" /><label for="stacks-interface"
							>Stacks Interface</label
						>
						<p>Stacks Interface</p>
					</div>

					<div>
						<input type="checkbox" id="stacks-dapps-clarity" /><label for="stacks-dapps-clarity"
							>Stacks dApps & Clarity</label
						>
						<p>Stacks dApps & Clarity</p>
					</div>

					<div>
						<input type="checkbox" id="stacks-dx" /><label for="stacks-dx"
							>Stacks Developer Experience</label
						>
						<p>Stacks Developer Experience</p>
					</div>

					<div>
						<input type="checkbox" id="stacks-ux" /><label for="stacks-ux"
							>Stacks User Experience</label
						>
						<p>Stacks User Experience</p>
					</div>

					<div>
						<input type="checkbox" id="engineering-back-end" /><label for="engineering-back-end"
							>Engineering, Back End</label
						>
						<p>Engineering, Back End</p>
					</div>

					<div>
						<input type="checkbox" id="cross-chain" /><label for="cross-chain"
							>Cross-Chain & Off-Chain</label
						>
						<p>Cross-Chain & Off-Chain</p>
					</div>
					<div>
						<input type="checkbox" id="bitcoin-utility" /><label for="bitcoin-utility"
							>Bitcoin Utility via Stacks</label
						>
						<p>Bitcoin Utility via Stacks</p>
					</div>
					<div>
						<input type="checkbox" id="stacks-education" /><label for="stacks-education"
							>Stacks Education & Community</label
						>
						<p>Stacks Education & Community</p>
					</div>
				</div>

				<div class="col">
					<h2>Stacks dApps & Clarity</h2>
					<ul>
						<li>Clarity Improvements</li>
						<li>SIP Development</li>
						<li>Smart Contract Templates</li>
						<li>DeFi / DAO / NFT / Gaming dApps</li>
						<li>Supply Chain & Smart City dApps</li>
						<li>Other</li>
					</ul>
				</div>
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

	h2 {
		padding: 20px 0;
		font-size: 20px;
		font-weight: 400;
	}

	.header div:first-child p {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 0 10px;
		font-size: 12px;
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

	.project-role-wrapper {
		width: 800px;
		height: 100%;
		background: #000000;
		margin: auto;
	}

	.roles {
		display: flex;
		gap: 150px;
	}

	.col {
		display: flex;
		flex-direction: column;
	}

	.col div {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 5px 0;
	}

	input[type='checkbox'] {
		height: 0;
		width: 0;
		visibility: hidden;
	}

	label {
		cursor: pointer;
		text-indent: -9999px;
		width: 40px;
		height: 25px;
		background: #2d3748;
		display: block;
		border-radius: 100px;
		position: relative;
	}

	label:after {
		content: '';
		position: absolute;
		top: 5px;
		left: 5px;
		width: 15px;
		height: 15px;
		background: #fff;
		border-radius: 90px;
		transition: 0.3s;
	}

	input:checked + label {
		background: green;
	}

	input:checked + label:after {
		left: calc(100% - 10px);
		transform: translateX(-100%);
	}

	label:active:after {
		width: 20px;
	}
</style>
