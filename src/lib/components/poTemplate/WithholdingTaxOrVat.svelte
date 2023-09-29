<script>
	import {withholdingTaxOrVat} from "$lib/strings/poSheet";

  export let withholdingTaxOrVatActual = "66654";
</script>

<div class="grid-container">
  <div class="withholding-tax-vat">
    <p class="withholding-tax-vat-label">
      {withholdingTaxOrVat}
    </p>
  </div>
  <h5 class="amount">
    {withholdingTaxOrVatActual}
  </h5>
</div>

<style>
  .withholding-tax-vat {
    grid-area: withholdingTaxOrVat;
    border-right: 1px solid black;
    display: flex;
    justify-self: end;
    padding-top: 0.25em;
    padding-right: 0.15em;
  }
  .withholding-tax-vat-label {
    font-size: var(--fontSizeSectionDataLabel);
  }
  .amount {
    grid-area: amount;
    justify-self: end;
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    padding-top: 0.25em;
    padding-right: 0.15em;
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
