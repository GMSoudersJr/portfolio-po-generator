<script lang="ts">
	import PoTemplate from "$lib/components/poPublicTemplate/PoTemplate.svelte";
	import { placeholder } from "$lib/poPdfDataPlaceHolder"

	const poPdfData = placeholder;
</script>

<main class="page-container">
	<PoTemplate {poPdfData}/>
</main>

<style>
	.page-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		place-items: center;
		background-image: linear-gradient(150deg, #259, #259259);
	}
</style>

