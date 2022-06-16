<div class="header-wrapper">
	<div class="header">
		<div class="left-sidebar">
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
		<div class="project-info-wrapper">
			<h1>Project Name, Budget & Duration</h1>
			<p class="sub-heading">Now its time to get down to the nitty gritty.</p>
			<div>
				<div class="project-title">
					<div>
						<p class="additional-info-label">Title Your Project</p>
					</div>
					<div class="typed-words">
						<p>30 Characters</p>
						<div>
							<span />
						</div>
					</div>
				</div>
				<input type="text" placeholder="Type Here..." id="project-title" />
				<p class="input-description">
					Name your Project so that it clearly communicates your objectives. Once your Project is
					titled a draft of your application will be saved as each field is OK’d. Drafts can be
					found on your Profile page.
				</p>
				<div class="show-team-budget">
					<div>
						<p>Total Project Budget</p>

						<input type="text" placeholder="Type Here..." id="project-title" />
						<p>Provide the total budget in $USD to complete your Project.</p>
					</div>
					<div>
						<p>Total Project Duration</p>

						<input type="text" placeholder="Type Here..." id="project-title" />
						<p>
							Provide the total amount of hours required to complete your Project. Rough estimates
							are just fine. Include all members if this is a team project.
						</p>
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
	}

	.header {
		display: flex;
		width: 100%;
	}

	.left-sidebar p {
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

	.project-info-wrapper {
		width: 800px;
		height: 100%;
		background: #000000;
		margin: auto;
	}

	input {
		background: rgba(0, 0, 0, 0.48);
		border: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.8);
		color: #ffffff;
		height: 30px;
		width: 100%;
		font-size: 14px;
	}

	.show-team-budget {
		display: flex;
		padding-top: 30px;
		gap: 25px;
	}

	.show-team-budget div p:first-of-type {
		padding-bottom: 10px;
	}

	.show-team-budget div p:nth-of-type(2) {
		padding-top: 10px;
	}

	.project-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 10px;
	}

	.project-title div {
		width: 100%;
	}

	.project-title:nth-of-type(2) {
		padding-top: 30px;
	}

	.typed-words {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 10px;
		padding-top: 10px;
	}

	.typed-words div {
		display: block;
		background: rgba(255, 255, 255, 0.06);
		width: 40%;
		height: 10px;
	}

	.typed-words div span {
		background: #718096;
		width: 30%;
		height: 100%;
		display: block;
		border: none;
	}

	.input-description {
		padding-top: 20px;
		padding-bottom: 30px;
		border-bottom: 1px solid #322659;
	}
</style>
