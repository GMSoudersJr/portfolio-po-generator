<script>
  import {
    beneficiaryName,
    required
  } from "$lib/strings/poSheet";

  export let beneficiaryNameActual = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="beneficiary-name-label item-a">
    <h5 class="beneficiary-name-text item-a">
      {beneficiaryName}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="beneficiary-name-actual">
    {beneficiaryNameActual}
  </p>
</div>

<style>
  .beneficiary-name-label {
    display: flex;
    grid-area: beneficiaryNameLabel;
  }
  .beneficiary-name-actual {
    grid-area: beneficiaryNameActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "beneficiaryNameLabel beneficiaryNameActual";
  }
</style>
