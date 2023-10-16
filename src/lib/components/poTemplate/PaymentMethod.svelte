<script lang="ts">
  import { pdfTemplatePaymentMethodString } from "$lib/strings/poTemplate";

  export let paymentMethod = "Wire";
</script>

<div class="grid-container">
  <h5 class="payment-method-label">
    {pdfTemplatePaymentMethodString}:
  </h5>
  <p class="payment-method-actual">
   {paymentMethod ?? ""}
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
    column-gap: 0.25rem;
  }
</style>
