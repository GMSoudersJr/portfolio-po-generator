<script>
  import {
    pnpLocation,
    required
  } from "$lib/strings/poSheet";

  export let pnpLocationActual = "Korea";
</script>

<div class="grid-container">
  <div class="pnp-location-label">
    <h5 class="pnp-location-text section1-data-label">
      {pnpLocation}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="pnp-location-actual section1-data-actual">
    {pnpLocationActual}
  </p>
</div>

<style>
  .pnp-location-label {
    display: flex;
    grid-area: pnpLocationLabel;
    padding-left: 0.15em;
  }
  .pnp-location-actual {
    grid-area: pnpLocationActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "pnpLocationLabel pnpLocationActual";
    margin: 0.25em 0;
  }
</style>
