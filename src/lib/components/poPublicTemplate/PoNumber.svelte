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
  <div class="value-container">
    <p class="po-number-actual">
      {poNumber ?? ""}
    </p>
  </div>
</div>

<style>
  .label {
    color: var(--kellyGreen);
    grid-area: poLabel;
    letter-spacing: var(--letterSpacingForAllCaps);
    font-size: 12px;
  }
  .po-number-actual {
    align-self: center;
  }
  .value-container {
    grid-area: poNumberActual;
    background-color: #F1F1F1;
    height: calc(341.85px / 6.472);
    border-radius: 8px;
    justify-self: stretch;
    text-align: center;
    font-size: var(--fontSizeSectionDataActual);
    display: grid;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    align-items: center;
    row-gap: 8px;
    grid-template-areas:
    "poLabel"
    "poNumberActual";
  }
</style>
