<header>
	<div class="progress">
		<div class="progress-bar">
			<span />
		</div>
		<p>Section 1 of 5</p>
	</div>
	<div class="close-wrapper">
		<p class="close">
			<svg
				width="12"
				height="12"
				viewBox="0 0 10 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.06046 4.99959L9.02921 2.03084C9.1701 1.89019 9.24936 1.69934 9.24953 1.50025C9.24971 1.30117 9.17079 1.11018 9.03015 0.969279C8.8895 0.828383 8.69864 0.74913 8.49956 0.748954C8.30048 0.748778 8.10948 0.827694 7.96858 0.968342L4.99984 3.93709L2.03109 0.968342C1.89019 0.827446 1.69909 0.748291 1.49984 0.748291C1.30058 0.748291 1.10948 0.827446 0.968586 0.968342C0.82769 1.10924 0.748535 1.30033 0.748535 1.49959C0.748535 1.69885 0.82769 1.88995 0.968586 2.03084L3.93734 4.99959L0.968586 7.96834C0.82769 8.10924 0.748535 8.30033 0.748535 8.49959C0.748535 8.69885 0.82769 8.88994 0.968586 9.03084C1.10948 9.17174 1.30058 9.25089 1.49984 9.25089C1.69909 9.25089 1.89019 9.17174 2.03109 9.03084L4.99984 6.06209L7.96858 9.03084C8.10948 9.17174 8.30058 9.25089 8.49983 9.25089C8.69909 9.25089 8.89019 9.17174 9.03108 9.03084C9.17198 8.88994 9.25113 8.69885 9.25113 8.49959C9.25113 8.30033 9.17198 8.10924 9.03108 7.96834L6.06046 4.99959Z"
					fill="white"
				/>
			</svg>
			Close
		</p>
		<span class="close-border" />
	</div>
</header>
<div class="slot">
	<slot />
</div>
<svg
	class="stx-logo"
	width="414"
	height="410"
	viewBox="0 0 414 410"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M258.999 518C402.041 518 518 402.042 518 259C518 115.958 402.041 0 258.999 0C115.958 0 0 115.958 0 259C0 402.042 115.958 518 258.999 518ZM388.499 211.702H311.081L365.448 129.5H324.347L258.891 228.664L193.651 129.5H152.551L206.917 211.702H129.499V243.451H388.499V211.702ZM309.56 305.211L364.578 388.5H323.477L258.891 290.641L194.304 388.5H153.421L208.439 305.429H129.499V273.896H388.499V305.211H309.56Z"
		fill="white"
		fill-opacity="0.04"
	/>
</svg>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding-top: 30px;
		padding-right: 15px;
		padding-left: 15px;
		padding-bottom: 80px;
	}

	.slot {
		padding: 0 15px;
	}

	.progress {
		width: 300px;
		color: #2d3748;
	}

	.progress-bar {
		width: 100%;
		height: 5px;
		background-color: rgba(255, 255, 255, 0.06);
	}

	.progress-bar span {
		background: linear-gradient(45deg, #3281cd, #96286f);
		width: 30%;
		height: 100%;
		display: block;
		border: none;
	}

	.close-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 10px;
	}

	.close {
		display: flex;

		align-items: center;
		gap: 2px;
	}

	.close-border {
		width: 32px;
		height: 2px;
		display: block;
		background-color: white;
	}

	.stx-logo {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
