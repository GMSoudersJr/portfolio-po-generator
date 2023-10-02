<script>
  import {
    bankName,
    required
  } from "$lib/strings/poTemplate";

  export let bankNameActual = "Shinhan Bank";
</script>

<div class="grid-container">
  <div class="bank-name-label">
    <h5 class="bank-name-text section3-data-label">
      {bankName}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="bank-name-actual section3-data-actual">
    {bankNameActual}
  </p>
</div>

<style>
  .bank-name-label {
    display: flex;
    grid-area: bankNameLabel;
    padding-left: 0.15em;
  }
  .bank-name-actual {
    grid-area: bankNameActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "bankNameLabel bankNameActual";
    margin: 0.25em 0;
  }
</style>
