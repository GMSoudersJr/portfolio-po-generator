<script lang="ts">
  import {
    pdfTemplatePoNumberString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let poNumber = "020922-Freelance-General-RC"
</script>

<div class="grid-container">
  <div class="po-label required-line">
    <h5 class="po-number-text label">
      {pdfTemplatePoNumberString}
    </h5>
    <p class="required warning label">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <div class=" po-number-area">
    <p class="po-number-actual">
      {poNumber ?? ""}
    </p>
  </div>
</div>

<style>
  .po-label {
    display: flex;
    grid-area: poLabel;
    align-self: flex-start;
  }
  .po-number-text {
    font-size: var(--fontSizeSectionDataLabel);
    letter-spacing: var(--letterSpacingForAllCaps);
  }
  .po-number-area {
    grid-area: poNumberArea;
    display: grid;
    row-gap: 0.5em;;
  }
  .po-number-actual {
    border-bottom: 1px solid black;
    font-size: var(--fontSizeSectionDataActual);
    font-size: 1rem;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr 16.5%;
    grid-template-rows: 1fr;
    grid-template-areas:
    "poLabel poNumberArea .";
    margin: 0.25em 0;
  }
  .label {
    font-size: 1rem;
  }
</style>
