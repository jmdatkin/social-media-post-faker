<script>
	import InstagramPostGenerator from "./components/InstagramPostGenerator.svelte";
</script>

<div class="container">
	<main>
		<h1>Instagram Post Generator</h1>
		<InstagramPostGenerator />
	</main>
</div>

<style>
	div.container {
		width: 100%;
		height: 100%;
		place-items: center;
		display: flex;
	}

	main {
		/* text-align: center; */
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-items: flex-start;
		max-width: none;
		margin: 0 auto;
		background-color: #eee;
	}

	@media (min-width: 640px) {
		main {
			max-width: 786px;
		}
	}
</style>
