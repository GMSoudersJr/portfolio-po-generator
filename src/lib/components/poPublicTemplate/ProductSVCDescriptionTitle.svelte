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
  <h5 class="description-label">
    {pdfTemplateProductServiceDescriptionString}
  </h5>
  <h5 class="price-label">
    {priceString}
  </h5>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: auto;
    align-items: center;
    column-gap: 0.5em;
    grid-template-areas:
    "description price";
  }
  .price-label {
    grid-area: price;
    justify-self: stretch;
    text-align: center;
    background-color: #FFF44F;
    border-radius: 12px;
    padding: 8px 0;
  }
  .description-label {
    letter-spacing: var(--letterSpacingForAllCaps);
    grid-area: description;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF44F;
    border-radius: 12px;
    padding: 8px;
  }
</style>
