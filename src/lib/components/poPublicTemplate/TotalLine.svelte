<script lang="ts">
	import {pdfTemplateTotalString} from "$lib/strings/poTemplate";
  import { currency as currencyObject } from "$lib/strings/poForm";

  export let currency = "krw";
  let currencySymbol = currencyObject.options.filter((entry) => entry.value ==
                                               currency)[0].symbol;
  export let total = 6665400;
  let totalString = `${currencySymbol} ${total.toLocaleString('en-US')}`
</script>

<div class="grid-container">
  <div class="label-container">
    <h5 class="label">
      {pdfTemplateTotalString}
    </h5>
  </div>
  <div class="amount-container">
    <p class="amount">
      {totalString}
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 16.5% 16.5%;
    grid-template-rows: 2em;
    align-items: center;
    justify-content: end;
    column-gap: 0.5em;
    grid-template-areas:
    "label amount";
  }
  .label-container {
    grid-area: label;
    display: flex;
    justify-content: center;
  }
  .label {
    font-size: var(--fontSizeSectionDataLabel);
    letter-spacing: var(--letterSpacingForAllCaps);
  }
  .amount {
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    font-weight: 700;
    padding: 0.5em 0.15em;
  }
  .amount-container {
    grid-area: amount;
  }
  .label-container,
  .amount-container {
    background-color: #F1F1F1;
    border-radius: 12px;
    text-align: center;
    align-items: center;
  }
  .label,
  .amount {
    padding: 8px 0;
  }
</style>
