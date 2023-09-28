<script>
  import {
    payableTo,
    required
  } from "$lib/strings/poSheet";

  export let payableToActual = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="payable-to-label item-a">
    <h5 class="payable-to-text item-a">
      {payableTo}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="payable-to-actual">
    {payableToActual}
  </p>
</div>

<style>
  .payable-to-label {
    display: flex;
    grid-area: payableToLabel;
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
  }
</style>
