<script>
	import InstagramPostGenerator from "./components/Instagram/InstagramPostGenerator.svelte";
	import html2canvas from "html2canvas";
    import Divider from "./components/Divider.svelte";

	const save = function () {
		html2canvas(document.querySelector("div.post-gen"), {
			// dpi: 144
			scale: 2,
		}).then((canvas) => {
			const dataUrl = canvas.toDataURL("png");
			const win = window.open(dataUrl, "_blank");
			// document.body.appendChild(canvas);
		});
	};
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet">
</svelte:head>


<div class="container">
	<main>
		<h1>Instagram Post Generator</h1>
		<Divider></Divider>
		<InstagramPostGenerator />
		<button on:click={save}>Save</button>
	</main>
</div>

<style>
	div.container {
		/* width: 100%; */
		/* height: 100%; */
		place-items: center;
		display: flex;
		margin: 5em 0;
		/* padding: 10em 0; */
	}
	
	button {
		margin-top: 12px;
	}

	h1 {
		letter-spacing: -0.05rem;
		/* font-family: monospace; */
	}

	main {
		/* text-align: center; */
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-items: flex-start;
		margin: 0 auto;
		max-height: 100%;
			/* max-width: 786px; */
		/* height: auto; */
		/* background-color: #eee; */
		background-color: #f3f4f4;
		border: solid 1px #c1c1c1;
		box-shadow: 0 0 2px rgba(0,0,0,0.1);
		border-radius: 2px;
		/* box-shadow: 2px 3px 0 #8b8b8e; */
	}

	@media (max-width: 860px) {
		main {
			/* max-width: 786px; */
			padding: 0;
		max-width: none;
		}

		div.container {
			margin: 0;
		}
	}
</style>
