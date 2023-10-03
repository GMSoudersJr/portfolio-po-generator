<script>
  import {
    payableTo,
    required
  } from "$lib/strings/poTemplate";

  export let payableToActual = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="payable-to-label required-line">
    <h5 class="payable-to-text section1-data-label">
      {payableTo}
    </h5>
    <p class="required warning">
      {required}
    </p>
    <h5>:</h5>
  </div>
  <p class="payable-to-actual section1-data-actual">
    {payableToActual}
  </p>
</div>

<style>
  .payable-to-label {
    display: flex;
    grid-area: payableToLabel;
    padding-left: 0.15em;
  }
  .payable-to-actual {
    grid-area: payableToActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "payableToLabel payableToActual";
    margin: 0.25em 0;
  }
</style>
