<script lang="ts">
  import PdfMakeButton from "$lib/components/poTemplate/PdfMakeButton.svelte";
  import PoTemplate from "$lib/components/poTemplate/PoTemplate.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { poPdfData } = data;
  const fileName = `${poPdfData?.poNumber}`;

</script>

<main class="pdf-generator-container">
  <section class="pdf-template" id="pdf-template-container">
    <PoTemplate
      {poPdfData}
    />
  </section>
  <PdfMakeButton {fileName}/>
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
</style>

