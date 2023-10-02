<script>
  import {
    beneficiaryName,
    required
  } from "$lib/strings/poTemplate";

  export let beneficiaryNameActual = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="beneficiary-name-label">
    <h5 class="beneficiary-name-text section3-data-label">
      {beneficiaryName}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="beneficiary-name-actual section3-data-actual">
    {beneficiaryNameActual}
  </p>
</div>

<style>
  .beneficiary-name-label {
    display: flex;
    grid-area: beneficiaryNameLabel;
    padding-left: 0.15em;
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
    margin: 0.25em 0;
  }
</style>
