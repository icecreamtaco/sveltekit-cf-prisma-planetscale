<div class="header-wrapper">
	<div class="header">
		<div class="side-menu-left">
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

		<div class="project-type-wrapper">
			<h1>project type</h1>
			<p class="sub-heading">Select a project type from one of the funding streams below.</p>
			<div class="column-wrapper">
				<div class="column">
					<div>
						<p class="column-heading">Stacks Foundation</p>
						<p class="column-sub-heading">Developer Grants</p>
					</div>
					<div>
						<input type="checkbox" id="open-source-starter-grant" /><label
							for="open-source-starter-grant">Open Source Starter Grant</label
						>
					</div>
					<div>
						<input type="checkbox" id="open-source-starter-grant" /><label
							for="open-source-starter-grant">Open Source Builder Grant</label
						>
					</div>
					<div>
						<input type="checkbox" id="open-source-starter-grant" /><label
							for="open-source-starter-grant">Open Source MVP Grant</label
						>
					</div>
					<p class="column-sub-heading">Community Grants</p>
					<div>
						<input type="checkbox" id="community-builder-grant" /><label
							for="community-builder-grant">Community Builder Grant</label
						>
					</div>
					<div>
						<input type="checkbox" id="education-grant" /><label for="education-grant"
							>Education Grant</label
						>
					</div>

					<div>
						<input type="checkbox" id="event-grant" /><label for="event-grant">Event Grant</label>
					</div>
					<div>
						<input type="checkbox" id="chapter-grant" /><label for="chapter-grant"
							>Chapter Grant</label
						>
					</div>

					<p class="column-sub-heading">Advanced Support</p>
					<div>
						<input type="checkbox" id="resident-program" /><label for="resident-program"
							>Resident Program</label
						>
					</div>
					<div>
						<input type="checkbox" id="direct-investment" /><label for="direct-investment"
							>Direct Investment</label
						>
					</div>
				</div>
				<div class="column">
					<div>
						<p class="column-heading">Stacks Ecosystem</p>
						<p class="column-sub-heading">Partner Grants</p>
					</div>
					<div>
						<input type="checkbox" id="alex-defi" /><label for="alex-defi"
							>ALEX DeFi Builder Grant</label
						>
					</div>

					<p class="column-sub-heading">Affiliated Organizations</p>
					<div>
						<a href="">Stacks Web5 Startup Lab</a>
					</div>
					<div>
						<a href="">Stacks Accelerator</a>
					</div>
				</div>

				<div class="column">
					<p class="column-heading">Open Source Builder Grant</p>
					<p>
						Great for individuals or teams interested in building medium to large open source
						projects, composable code, infrastructure, tooling, research, or technical resources for
						the Stacks community.
					</p>
					<div class="budget">
						<p>Maximum Project Budget</p>
						<p>50k</p>
					</div>
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
		justify-content: space-around;
	}

	.header {
		display: flex;
		width: 100%;
	}

	.side-menu-left p {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 0 10px;
		font-size: 12px;
	}

	.column-wrapper {
		display: flex;
	}

	.column {
		width: 100%;

		padding: 0 20px;
	}

	.column:first-of-type {
		border-right: 1px solid #322659;
	}

	.column:nth-of-type(3) {
		background: rgba(0, 0, 0, 0.48);
	}

	.column:nth-of-type(3) p:nth-child(2) {
		padding: 20px 0px;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.64);
	}

	.budget {
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 10px;
	}
	.column-heading {
		font-size: 16px;
	}

	.column-sub-heading {
		font-size: 16px;
		padding: 8px 0;
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

	.ok-button p {
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

	.project-type-wrapper {
		width: 800px;
		height: 100%;
		background: #000000;
		margin: auto;
	}

	label {
		font-size: 14px;
		color: rgba(255, 255, 255, 0.64);
	}
</style>
