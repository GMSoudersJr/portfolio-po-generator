<script>
	import { pdfTemplateWithholdingTaxOrVatString } from "$lib/strings/poTemplate";

  export let tax = 66654;
</script>

<div class="grid-container">
  <div class="label-container">
    <p class="label">
      {pdfTemplateWithholdingTaxOrVatString}
    </p>
  </div>
  <div class="amount-container">
    <h5 class="amount">
      {tax.toLocaleString('en-US')}
    </h5>
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
  .amount {
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    padding: 0.5em 0.15em;
  }
  .label {
    font-size: var(--fontSizeSectionDataLabel);
  }
  .label,
  .amount {
    padding: 8px 0;
  }
</style>
