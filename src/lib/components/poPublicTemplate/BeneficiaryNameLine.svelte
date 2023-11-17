<script lang="ts">
  import {
    pdfTemplateBeneficiaryNameString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let payeeName = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="beneficiary-name-label required-line">
    <h5 class="beneficiary-name-text section3-data-label">
      {pdfTemplateBeneficiaryNameString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="beneficiary-name-actual section3-data-actual">
    {payeeName ?? ""}
  </p>
</div>

<style>
  .beneficiary-name-label {
    display: flex;
    grid-area: beneficiaryNameLabel;
    padding-left: 0.15em;
  }
  .beneficiary-name-actual {
    grid-area: beneficiaryNameActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "beneficiaryNameLabel beneficiaryNameActual";
    margin: 0.25em 0;
  }
</style>
