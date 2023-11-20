<script lang="ts">
  import { currency as currencyObject } from "$lib/strings/poForm";
  export let label: string;
  export let value: number;
  export let currency: string = "";

  let currencySymbol: string = "";

  if ( currency.length > 0 ) {
    currencySymbol = currencyObject.options.filter((entry) => entry.value ==
                                               currency)[0].symbol;
  }
  let totalString = `${currencySymbol} ${value.toLocaleString('en-US')}`
</script>

<div class="grid-container">
  <div class="label-container">
    <h5 class="label">
      {label}:
    </h5>
  </div>
  <div class="amount-container">
    <h5 class="amount">
      {totalString}
    </h5>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 33% 33%;
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
    justify-content: end;
  }
  .amount-container {
    grid-area: amount;
    background-color: #F1F1F1;
  }
  .label-container,
  .amount-container {
    border-radius: 12px;
    text-align: center;
    align-items: center;
  }
  .amount {
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    padding: 0.5em 0.15em;
  }
  .label,
  .amount {
    padding: 8px 0;
  }
</style>
