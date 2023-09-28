<script>
  import {
    poNumber,
    poNumberFormat,
    poNumberFormatExample,
    required
  } from "$lib/strings/poSheet";

  export let poNumberActual = "020922-Freelance-General-RC"
</script>

<div class="grid-container">
  <div class="po-label item-a">
    <h5 class="po-number-text item-a">
      {poNumber}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <div class=" po-number-area item-b b-grid-container">
    <p class="actual-po-number">
      {poNumberActual}
    </p>
    <p class="po-number-format">
      {poNumberFormat}
    </p>
    <p class="po-number-example">
      {poNumberFormatExample}
    </p>
  </div>
</div>

<style>
  .po-number-format,
  .po-number-example {
    color: var(--exampleCrimson);
    font-size: 12px;
    text-align: center;
  }
  .po-label {
    display: flex;
    grid-area: poLabel;
  }
  .po-number-area {
    grid-area: poNumberArea;
  }
  .actual-po-number {
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr 16.5%;
    grid-template-rows: 1fr;
    grid-template-areas:
    "poLabel poNumberArea .";
  }
</style>
