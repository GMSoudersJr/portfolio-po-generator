<script lang="ts">
  import {
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let value: string;
  export let label: string;
</script>

<div class="grid-container">
  <div class="payment-detail-label required-line">
    <h5 class="payment-detail-text section3-data-label">
      {label}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="payment-detail-actual section3-data-actual">
    {value ?? ""}
  </p>
</div>

<style>
  .payment-detail-label {
    display: flex;
    grid-area: paymentDetailLabel;
    padding-left: 0.15em;
  }
  .payment-detail-actual {
    grid-area: paymentDetailActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "paymentDetailLabel paymentDetailActual";
    margin: 0.25em 0;
  }
</style>

