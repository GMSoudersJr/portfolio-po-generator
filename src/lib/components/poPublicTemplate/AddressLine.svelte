<script lang="ts">
  import {
    pdfTemplateAddressString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let homeAddress = "wherever it is";
  export let homeAddressLine2 = "";
</script>

<div class="grid-container">
  <div class="address-label required-line">
    <h5 class="address-text section1-data-label">
      {pdfTemplateAddressString}:
    </h5>
  </div>
  <p class="address-actual-line-1 section1-data-actual">
    {homeAddress ?? ""}
  </p>
  <p class="address-actual-line-2 section1-data-actual">
    {homeAddressLine2 ?? ""}
  </p>
</div>

<style>
  .address-label {
    display: flex;
    grid-area: addressLabel;
    padding-left: 0.15em;
  }
  .address-actual-line-1 {
    grid-area: addressActualLine1;
    border-bottom: 1px solid black;
  }
  .address-actual-line-2 {
    grid-area: addressActualLine2;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
    "addressLabel addressActualLine1"
    ". addressActualLine2"
    "none none";
    row-gap: 0.5em;
    margin: 0.25em 0;
  }
</style>
