<script>
	import {withholdingTaxOrVat} from "$lib/strings/poSheet";

  export let withholdingTaxOrVatActual = "66654";
</script>

<div class="grid-container">
  <div class="withholding-tax-vat">
    <h5>
      {withholdingTaxOrVat}
    </h5>
  </div>
  <p class="amount">
    {withholdingTaxOrVatActual}
  </p>
</div>

<style>
  .withholding-tax-vat {
    grid-area: withholdingTaxOrVat;
    border-right: 1px solid black;
    display: flex;
    justify-self: end;
  }
  .amount {
    grid-area: amount;
    justify-self: end;
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
