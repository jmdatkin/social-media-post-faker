<script>
	import InstagramPostGenerator from "./components/InstagramPostGenerator.svelte";
	import html2canvas from "html2canvas";

	const save = function () {
		html2canvas(document.querySelector("div.post-gen"), {
			// dpi: 144
			scale: 2,
		}).then((canvas) => document.body.appendChild(canvas));
	};
</script>

<div class="container">
	<main>
			<h1>Instagram Post Generator</h1>
			<InstagramPostGenerator />
			<button on:click={save}>Save</button>
	</main>
</div>

<style>
	div.container {
		width: 100%;
		height: 100%;
		place-items: center;
		display: flex;
		/* padding: 10em 0; */
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
		max-height: 100%;
		/* height: auto; */
		background-color: #eee;
	}

	@media (min-width: 640px) {
		main {
			max-width: 786px;
		}
	}
</style>
