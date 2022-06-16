<div class="add-application-wrapper">
	<h1>add your application</h1>
	<p class="sub-heading">
		Give yourself 20 min to complete the application. Drafts are automatically saved on your Profile
		page.
	</p>
	<div class="steps-wrapper">
		<span class="border-left">
			<div class="first-step">
				<div>
					<p>Step 1</p>
					<p>Complete your profile</p>
				</div>

				<div>
					<p>Step 1</p>
				</div>
			</div>
		</span>
	</div>

	<div class="steps-wrapper">
		<div class="all-other-steps">
			<div>
				<p>Step 2</p>
				<p>Learn about Projects</p>
			</div>

			<div>
				<p>Step 2</p>
			</div>
		</div>
	</div>

	<div class="steps-wrapper">
		<div class="all-other-steps">
			<div>
				<p>Step 3</p>
				<p>Learn about Projects</p>
			</div>

			<div>
				<p>Step 3</p>
			</div>
		</div>
	</div>

	<div class="steps-wrapper">
		<div class="all-other-steps">
			<div>
				<p>Provide your Project Details</p>
				<p>Complete your profile</p>
			</div>

			<div>
				<p>Step 4</p>
			</div>
		</div>
	</div>

	<div class="steps-wrapper">
		<div class="all-other-steps">
			<div>
				<p>Step 5</p>
				<p>Verify and Submit your Project</p>
			</div>

			<div>
				<p>Step 5</p>
			</div>
		</div>
	</div>
</div>

<style>
	.add-application-wrapper {
		max-width: 800px;
		height: 100%;
		background: #000000;
		margin: auto;
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

	.steps-wrapper {
		width: 100%;
		height: 75px;
	}

	.border-left {
		border-left: 2px solid #805ad5;
		display: block;
		width: 100%;
		height: 100%;
	}

	.steps-wrapper div:first-child {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		align-items: center;
		padding: 0 15px;
	}

	.steps-wrapper div:first-child div:first-child p:first-child {
		font-weight: 600;
	}

	.steps-wrapper div:first-child div:first-child p:nth-child(2) {
		font-size: 0.9rem;
	}

	.first-step div:first-child {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.first-step div:nth-child(2) {
		background: linear-gradient(45deg, #3182ce, #97266d);
		border: 1px solid #ffffff;
		border-radius: 5px;
		width: 400px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.all-other-steps div:first-child {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.all-other-steps div:nth-child(2) {
		background: rgba(255, 255, 255, 0.04);
		border-radius: 5px;
		width: 400px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
