<script lang="ts">
  import {
    pdfTemplateBankAddressString,
    pdfTemplatePhysicalAddressString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let bankAddress = "Some place";
  export let bankAddressLine2 = "";
  export let bankAddressLine3 = "";
</script>

<div class="grid-container">
  <div class="bank-address-label required-line">
    <h5 class="bank-address-text section3-data-label">
      {pdfTemplateBankAddressString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="bank-address-actual-line1 section3-data-actual">
    {bankAddress ?? ""}
  </p>
  <p class="bank-address-actual-line2 section3-data-actual">
    {bankAddressLine2 ?? ""}
  </p>
</div>

<style>
  .bank-address-label {
    display: flex;
    grid-area: bankAddressLabel;
    padding-left: 0.15em;
  }
  .bank-address-actual-line1 {
    grid-area: bankAddressActualLine1;
    border-bottom: 1px solid black;
  }
  .bank-address-actual-line2 {
    grid-area: bankAddressActualLine2;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
    "bankAddressLabel bankAddressActualLine1"
    ". bankAddressActualLine2";
    row-gap: 0.25em;
    margin: 0.25em 0;
  }
</style>
