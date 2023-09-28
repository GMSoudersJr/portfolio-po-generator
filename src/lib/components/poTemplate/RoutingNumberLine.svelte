<script>
  import {
    routingABAOrSwift,
    routingMessage,
    required
  } from "$lib/strings/poSheet";

  export let routingNumberActual = "2343200094";
</script>

<div class="grid-container">
  <div class="routing-number-label item-a">
    <h5 class="routing-number-text item-a">
      {routingABAOrSwift}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="routing-message warning">
    {routingMessage}
  </p>
  <p class="routing-number-actual">
    {routingNumberActual}
  </p>
</div>

<style>
  .routing-number-label {
    display: flex;
    grid-area: routingNumberLabel;
  }
  .routing-message {
    grid-area: routingMessage;
  }
  .routing-number-actual {
    grid-area: routingNumberActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
    "routingNumberLabel routingNumberActual"
    "routingMessage .";
  }
</style>
