<script>
  import {
    pnpLocation,
    required
  } from "$lib/strings/poSheet";

  export let pnpLocationActual = "Korea";
</script>

<div class="grid-container">
  <div class="pnp-location-label item-a">
    <h5 class="pnp-location-text item-a">
      {pnpLocation}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="pnp-location-actual">
    {pnpLocationActual}
  </p>
</div>

<style>
  .pnp-location-label {
    display: flex;
    grid-area: pnpLocationLabel;
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
  }
</style>
