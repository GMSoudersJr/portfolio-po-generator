<script lang="ts">
  import {
    pdfTemplateIfEventRelatedString,
    pdfTemplateProductServiceDescriptionString
  } from "$lib/strings/poTemplate";

  import { currency as currencyObject, price } from "$lib/strings/poForm";

  export let currency = "usd";
  let currencySymbol = currencyObject.options.filter((entry) => entry.value ==
                                               currency)[0].symbol;
  let priceString = `Amount (${currencySymbol})`;
</script>

<div class="grid-container">
  <div class="description">
    <h5 class="section2-data-label">
      {pdfTemplateProductServiceDescriptionString}
    </h5>
    <p class="warning">
      {pdfTemplateIfEventRelatedString}
    </p>
  </div>
  <div class="price">
    <h5 class="label">
      {priceString}
    </h5>
  </div>
</div>

<style>
  .section2-data-label {
    letter-spacing: var(--letterSpacingForAllCaps);
  }
  .price {
    grid-area: price;
    justify-self: end;
  }
  .description {
    grid-area: description;
    display: flex;
    align-items: center;
    justify-content: start;
    column-gap: 0.2em;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: auto;
    align-items: center;
    padding: 0.3em 0.5em;
    grid-template-areas:
    "description price";
  }

</style>
