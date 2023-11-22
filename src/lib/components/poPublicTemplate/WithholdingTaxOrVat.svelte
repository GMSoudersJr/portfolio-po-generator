<script lang="ts">
	import { pdfTemplateTaxString } from "$lib/strings/poTemplate";

  export let tax = 66654;
  export let taxRate: number;
</script>

<div class="grid-container">
  <div class="label-container sub-container">
    <h5 class="label text">
      {pdfTemplateTaxString}:
    </h5>
  </div>
  <div class="tax-rate-container sub-container">
    <h5 class="tax-rate text">
      {taxRate * 100}%
    </h5>
  </div>
  <div class="amount-container sub-container">
    <h5 class="amount text">
      {tax.toLocaleString('en-US')}
    </h5>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1.618fr 1fr 161.41px;
    grid-template-rows: 2em;
    align-items: center;
    justify-content: end;
    column-gap: 20px;
    grid-template-areas:
    "label taxRate amount";
  }
  .sub-container {
    height: calc(161.41px / 4.854);
    display: grid;
    align-items: center;
  }
  .tax-rate-container {
    grid-area: taxRate;
    border-radius: 8px;
  }
  .label-container {
    grid-area: label;
  }
  .amount-container {
    grid-area: amount;
  }
  .tax-rate-container,
  .amount-container {
    background-color: #F1F1F1;
    border-radius: 8px;
    text-align: center;
    align-items: center;
  }
  .amount {
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    padding: 0.5em 0.15em;
  }
  .label {
    font-size: var(--fontSizeSectionDataLabel);
    justify-self: end;
  }
  .tax-rate {
    padding: 8px 5px;
  }
</style>
