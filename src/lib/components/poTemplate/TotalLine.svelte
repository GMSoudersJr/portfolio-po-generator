<script>
	import {total} from "$lib/strings/poSheet";

  export let totalActual = "6665400";
</script>

<div class="grid-container">
  <div class="total">
    <h5 class="total-label">
      {total}
    </h5>
  </div>
  <p class="amount">
    {totalActual}
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
