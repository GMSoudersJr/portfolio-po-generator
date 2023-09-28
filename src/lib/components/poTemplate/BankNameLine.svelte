<script>
  import {
    bankName,
    required
  } from "$lib/strings/poSheet";

  export let bankNameActual = "Shinhan Bank";
</script>

<div class="grid-container">
  <div class="bank-name-label item-a">
    <h5 class="bank-name-text item-a">
      {bankName}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="bank-name-actual">
    {bankNameActual}
  </p>
</div>

<style>
  .bank-name-label {
    display: flex;
    grid-area: bankNameLabel;
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
  }
</style>
