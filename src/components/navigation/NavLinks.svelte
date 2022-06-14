<script>
	import Auth from '../auth/Auth.svelte';
</script>

<ul>
	<span>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/about">Projects</a>
		</li>
	</span>
	<span>
		<li>
			<Auth />
		</li>
		<li>PFP</li>
	</span>
</ul>

<style>
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		padding: 20px;
	}

	span {
		display: flex;
		gap: 30px;
	}

	a {
		text-decoration: none;
	}
</style>
