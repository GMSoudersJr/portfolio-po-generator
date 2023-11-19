<script lang="ts">
  import {
    pdfTemplatePoNumberString,
  } from "$lib/strings/poTemplate";

  export let poNumber = "020922-Freelance-General-RC"
</script>

<div class="grid-container">
  <h5 class="po-number-text label">
    {pdfTemplatePoNumberString}:
  </h5>
  <p class="po-number-actual">
    {poNumber ?? ""}
  </p>
</div>

<style>
  .label {
    grid-area: poLabel;
    letter-spacing: var(--letterSpacingForAllCaps);
    font-size: 12px;
    padding: 5px 0;
  }
  .po-number-actual {
    grid-area: poNumberActual;
    background-color: #F1F1F1;
    border-radius: 12px;
    justify-self: stretch;
    text-align: center;
    padding: 8px;
    font-size: var(--fontSizeSectionDataActual);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    grid-template-areas:
    "poLabel"
    "poNumberActual";
  }
</style>
