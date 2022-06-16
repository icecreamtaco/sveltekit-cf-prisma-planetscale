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
		<div class="project-role-wrapper">
			<h1>project tags</h1>
			<p class="sub-heading">Select all of the project tags below that apply to your project.</p>
			<div class="roles">
				<div class="col">
					<div>
						<input type="checkbox" id="project-lead" /><label for="project-lead">Project Lead</label
						>
						<p>Project Lead</p>
					</div>
					<div>
						<input type="checkbox" id="project-support" /><label for="project-support"
							>Project Support</label
						>
						<p>Project Support</p>
					</div>

					<div>
						<input type="checkbox" id="engineering-fullstack" /><label for="engineering-fullstack"
							>Engineering, Fullstack</label
						>
						<p>Engineering, Fullstack</p>
					</div>

					<div>
						<input type="checkbox" id="engineering-clarity" /><label for="engineering-clarity"
							>Engineering, Clarity</label
						>
						<p>Engineering, Clarity</p>
					</div>

					<div>
						<input type="checkbox" id="engineering-front-end" /><label for="engineering-front-end"
							>Engineering, Front End</label
						>
						<p>Engineering, Front End</p>
					</div>

					<div>
						<input type="checkbox" id="engineering-back-end" /><label for="engineering-back-end"
							>Engineering, Back End</label
						>
						<p>Engineering, Back End</p>
					</div>

					<div>
						<input type="checkbox" id="engineering-other" /><label for="engineering-other"
							>Engineering, Other</label
						>
						<p>Engineering, Other</p>
					</div>
					<p class="additional-info-label">Additional Description (optional)</p>
					<input
						type="text"
						class="additional-info-field"
						placeholder="Type Here..."
						id="additional-description"
					/>
					<div class="typed-words">
						<p>30 Characters</p>
						<div>
							<span />
						</div>
					</div>
				</div>

				<div class="col">
					<div>
						<input type="checkbox" id="product-development" /><label for="product-development"
							>Product Development</label
						>
						<p>Product Development</p>
					</div>
					<div>
						<input type="checkbox" id="ux/ui-designer" /><label for="ux/ui-designer"
							>UX/UI Designer</label
						>
						<p>UX/UI Designer</p>
					</div>

					<div>
						<input type="checkbox" id="ux/ui-researcher" /><label for="ux/ui-researcher"
							>UX/UI Researcher</label
						>
						<p>UX/UI Researcher</p>
					</div>

					<div>
						<input type="checkbox" id="marketing" /><label for="marketing">Marketing</label>
						<p>Marketing</p>
					</div>

					<div>
						<input type="checkbox" id="operations" /><label for="operations">Operations</label>
						<p>Operations</p>
					</div>

					<div>
						<input type="checkbox" id="content-creator" /><label for="content-creator"
							>Content Creator</label
						>
						<p>Content Creator</p>
					</div>

					<div>
						<input type="checkbox" id="other" /><label for="other">Engineering, Other</label>
						<p>Other</p>
					</div>
					<p class="additional-info-label">Additional Description (optional)</p>
					<input
						type="text"
						class="additional-info-field"
						placeholder="Type Here..."
						id="additional-description"
					/>
					<div class="typed-words">
						<p>30 Characters</p>
						<div>
							<span />
						</div>
					</div>
				</div>
			</div>
			<div class="project-openness">
				<p>Project Openness</p>
				<div>
					<div>
						<p>Fully Open Source</p>
					</div>
					<div>
						<p>Partially Open Source</p>
					</div>
					<div>
						<p>Not Open Source</p>
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

	.left-sidebar div:first-child p {
		display: flex;
		align-items: center;
		gap: 5px;

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

	.left-sidebar p {
		font-size: 14px;
		display: flex;
		gap: 5px;
		padding: 0 10px;
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
		justify-content: space-between;
	}

	.col {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-right: 20px;
		font-size: 12px;
	}

	.col:nth-of-type(2) {
		border-left: 1px solid #322659;
		padding-left: 10px;
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

	.additional-info-field {
		background: rgba(0, 0, 0, 0.48);
		border: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.8);
		color: #ffffff;
		height: 30px;
		width: 100%;
		font-size: 14px;
	}

	.additional-info-label {
		color: white;
		padding-top: 40px;
		padding-bottom: 10px;
	}
	/* Not Working */
	/* input::placeholder {
		padding: 20px 0;
	} */

	.typed-words {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-top: 10px;
		justify-content: space-between;
	}

	.typed-words div {
		display: block;
		background: rgba(255, 255, 255, 0.06);
		width: 70%;
		height: 10px;
	}

	.typed-words div span {
		background: #718096;
		width: 10%;
		height: 100%;
		display: block;
		border: none;
	}

	.project-openness {
		padding: 0 10px;
	}

	.project-openness div:first-of-type {
		display: flex;
		font-size: 14px;
		gap: 50px;
		padding-top: 5px;
		align-items: center;
	}
</style>
