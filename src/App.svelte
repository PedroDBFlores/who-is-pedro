<script lang="ts">
	import { MaterialApp } from "svelte-materialify";

	import Heading from "./components/heading/heading.svelte";
	let theme: "light" | "dark" = "light";

	function toggleTheme() {
		if (theme === "light") theme = "dark";
		else theme = "light";
	}
</script>

<MaterialApp {theme}>
	<main>
		<Heading changeTheme={toggleTheme} />
	</main>
</MaterialApp>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
