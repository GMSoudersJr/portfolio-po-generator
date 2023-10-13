<script lang="ts">
  import PoTemplate from "$lib/components/poTemplate/PoTemplate.svelte";
  import type { PageData } from "./$types";
	import PdfButton from "./PdfButton.svelte";

  export let data: PageData;
  console.log(data);
  const { poPdfData } = data;
</script>

<main class="pdf-generator-container">
  <section class="pdf-template" id="pdf-template-container">
    <PoTemplate {poPdfData}/>
  </section>
  <PdfButton />
</main>

<style>
  .pdf-generator-container {
    background-color: #F2F5F9;
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    ". pdfTemplate pdfButton";
  }
  .pdf-template {
    grid-area: pdfTemplate;
  }
  .pdf-button {
    grid-area: pdfButton;
    font-size: 2em;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
  }
</style>

