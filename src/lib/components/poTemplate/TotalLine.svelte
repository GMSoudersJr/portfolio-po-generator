<script lang="ts">
	import {pdfTemplateTotalString} from "$lib/strings/poTemplate";
  import { currency as currencyObject } from "$lib/strings/poForm";

  export let currency = "krw";
  let currencySymbol = currencyObject.options.filter((entry) => entry.value ==
                                               currency)[0].symbol;
  console.log(currencySymbol);
  export let total = 6665400;
  let totalString = `${currencySymbol} ${total.toLocaleString('en-US')}`
</script>

<div class="grid-container">
  <div class="total">
    <h5 class="total-label">
      {pdfTemplateTotalString}
    </h5>
  </div>
  <p class="amount">
    {totalString}
  </p>
</div>

<style>
  .total {
    grid-area: total;
    border-right: 1px solid black;
    display: flex;
    justify-self: end;
    padding-top: 0.25em;
    padding-right: 0.15em;
  }
  .total-label {
    font-size: var(--fontSizeSectionDataLabel);
    letter-spacing: var(--letterSpacingForAllCaps);
  }
  .amount {
    grid-area: amount;
    justify-self: end;
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    font-weight: 700;
    padding-top: 0.25em;
    padding-right: 0.15em;
  }
  .grid-container {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: auto;
    grid-template-areas:
    "total amount";
  }
</style>
