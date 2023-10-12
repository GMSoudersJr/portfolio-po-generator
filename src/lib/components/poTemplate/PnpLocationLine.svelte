<script lang="ts">
  import {
    pdfTemplatePnpLocationString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let pnpLocation = "Korea";
</script>

<div class="grid-container">
  <div class="pnp-location-label required-line">
    <h5 class="pnp-location-text section1-data-label">
      {pdfTemplatePnpLocationString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="pnp-location-actual section1-data-actual">
    {pnpLocation ?? ""}
  </p>
</div>

<style>
  .pnp-location-label {
    display: flex;
    grid-area: pnpLocationLabel;
    padding-left: 0.15em;
  }
  .pnp-location-actual {
    grid-area: pnpLocationActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "pnpLocationLabel pnpLocationActual";
    margin: 0.25em 0;
  }
</style>
