<script>
  import {
    address,
    required
  } from "$lib/strings/poTemplate";

  export let addressActualLine1 = "wherever it is";
  export let addressActualLine2 = "I will come to you";
</script>

<div class="grid-container">
  <div class="address-label">
    <h5 class="address-text section1-data-label">
      {address}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="address-actual-line-1 section1-data-actual">
    {addressActualLine1}
  </p>
  <p class="address-actual-line-2 section1-data-actual">
    {addressActualLine2}
  </p>
</div>

<style>
  .address-label {
    display: flex;
    grid-area: addressLabel;
    padding-left: 0.15em;
  }
  .address-actual-line-1 {
    grid-area: addressActualLine1;
    border-bottom: 1px solid black;
  }
  .address-actual-line-2 {
    grid-area: addressActualLine2;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
    "addressLabel addressActualLine1"
    ". addressActualLine2"
    "none none";
    row-gap: 0.3em;
    margin: 0.25em 0;
  }
</style>
