<script>
	import { pdfTemplateWithholdingTaxOrVatString } from "$lib/strings/poTemplate";

  export let tax = 66654;
</script>

<div class="grid-container">
  <div class="withholding-tax-vat">
    <p class="withholding-tax-vat-label">
      {pdfTemplateWithholdingTaxOrVatString}
    </p>
  </div>
  <h5 class="amount">
    {tax.toLocaleString('en-US')}
  </h5>
</div>

<style>
  .withholding-tax-vat {
    grid-area: withholdingTaxOrVat;
    border-right: 1px solid black;
    display: flex;
    justify-self: end;
    padding: 0.5em 0.15em;
  }
  .withholding-tax-vat-label {
    font-size: var(--fontSizeSectionDataLabel);
  }
  .amount {
    grid-area: amount;
    justify-self: end;
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    padding: 0.5em 0.15em;
  }
  .grid-container {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: auto;
    grid-template-areas:
    "withholdingTaxOrVat amount";
  }
</style>
