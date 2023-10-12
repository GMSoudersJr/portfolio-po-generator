<script lang="ts">
  import {
    pdfTemplatePoNumberString,
    pdfTemplatePoNumberFormatString,
    pdfTemplatePoNumberFormatExampleString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let poNumber = "020922-Freelance-General-RC"
</script>

<div class="grid-container">
  <div class="po-label required-line">
    <h5 class="po-number-text">
      {pdfTemplatePoNumberString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <div class=" po-number-area">
    <p class="po-number-actual">
      {poNumber ?? ""}
    </p>
    <p class="po-number-format">
      {pdfTemplatePoNumberFormatString}
    </p>
    <p class="po-number-example">
      {pdfTemplatePoNumberFormatExampleString}
    </p>
  </div>
</div>

<style>
  .po-number-format,
  .po-number-example {
    color: var(--exampleCrimson);
    font-size: var(--fontSizePoFormatAndExample);
    font-size: 0.64em;
    font-style: italic;
    text-align: center;

  }
  .po-label {
    display: flex;
    grid-area: poLabel;
    align-self: flex-start;
  }
  .po-number-text {
    font-size: var(--fontSizeSectionDataLabel);
  }
  .po-number-area {
    grid-area: poNumberArea;
    display: grid;
    row-gap: 0.5em;;
  }
  .po-number-actual {
    border-bottom: 1px solid black;
    font-size: var(--fontSizeSectionDataActual);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr 16.5%;
    grid-template-rows: 1fr;
    grid-template-areas:
    "poLabel poNumberArea .";
    margin: 0.25em 0;
  }
</style>
