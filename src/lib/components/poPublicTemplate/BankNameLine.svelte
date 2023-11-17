<script lang="ts">
  import {
    pdfTemplateBankNameString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let bankName = "Shinhan Bank";
</script>

<div class="grid-container">
  <div class="bank-name-label required-line">
    <h5 class="bank-name-text section3-data-label">
      {pdfTemplateBankNameString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="bank-name-actual section3-data-actual">
    {bankName ?? ""}
  </p>
</div>

<style>
  .bank-name-label {
    display: flex;
    grid-area: bankNameLabel;
    padding-left: 0.15em;
  }
  .bank-name-actual {
    grid-area: bankNameActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "bankNameLabel bankNameActual";
    margin: 0.25em 0;
  }
</style>
