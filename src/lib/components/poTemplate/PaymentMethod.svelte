<script>
  import { paymentMethod } from "$lib/strings/poSheet";

  export let actualPaymentMethod = "Wire";
</script>

<div class="grid-container">
  <h5 class="payment-method-label">
    {paymentMethod}:
  </h5>

  <p class="payment-method-actual">
   {actualPaymentMethod}
  </p>
</div>
<style>
  .payment-method-label {
    grid-area: paymentMethodLabel;
    justify-self: end;
    font-size: var(--fontSizeSectionDataLabel);
  }
  .payment-method-actual {
    grid-area: paymentMethodActual;
    justify-self: start;
    font-size: var(--fontSizePaymentMethodActualAndMoney);
  }
  .grid-container {
    display: grid;
    grid-template-columns:  1fr 16.5%;
    grid-template-rows: 1fr;
    grid-template-areas:
    "paymentMethodLabel paymentMethodActual";
    margin: 0.25em 0;
  }
</style>
