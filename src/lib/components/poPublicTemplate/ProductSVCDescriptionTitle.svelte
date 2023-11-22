<script lang="ts">
  import {
    pdfTemplateProductServiceDescriptionString
  } from "$lib/strings/poTemplate";

  import { currency as currencyObject } from "$lib/strings/poForm";

  export let currency = "usd";
  let currencySymbol = currencyObject
    .options
    .filter((entry) => entry.value == currency)[0].symbol;
  let priceString = `Amount (${currencySymbol})`;
</script>

<div class="grid-container">
  <div class="label-container">
    <h5 class="description-label">
      {pdfTemplateProductServiceDescriptionString}
    </h5>
  </div>
  <div class="value-container">
    <h5 class="price-label">
      {priceString}
    </h5>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 3.236fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    column-gap: 20px;
    grid-template-areas:
    "description price";
  }
  .value-container {
    grid-area: price;
    justify-self: stretch;
    height: calc(161.41px / 4.854);
    text-align: center;
    background-color: #FFF44F;
    background-color: #4CBB17;
    border-radius: 8px;
    padding: 8px 0;
    display: grid;
  }
  .price-label,
  .description-label {
    align-self: center;
  }
  .label-container {
    letter-spacing: var(--letterSpacingForAllCaps);
    grid-area: description;
    height: calc(161.41px / 4.854);
    text-align: center;
    background-color: #FFF44F;
    background-color: #4CBB17;
    border-radius: 8px;
    padding: 8px;
  }
</style>
