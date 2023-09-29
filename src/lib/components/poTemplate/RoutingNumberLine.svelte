<script>
  import {
    routingABAOrSwift,
    routingMessage,
    required
  } from "$lib/strings/poSheet";

  export let routingNumberActual = "2343200094";
  export let swiftCodeActual = "FRBBUS6S";
</script>

<div class="grid-container">
  <div class="routing-number-label">
    <h5 class="routing-number-text section3-data-label">
      {routingABAOrSwift}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="routing-message warning">
    {routingMessage}
  </p>
  <p class="routing-number-actual section3-data-actual">
    {routingNumberActual}
  </p>
  <p class="swift-code-actual section3-data-actual">
    {swiftCodeActual}
  </p>
</div>

<style>
  .routing-number-label {
    display: flex;
    grid-area: routingNumberLabel;
    padding-left: 0.15em;
  }
  .routing-message {
    grid-area: routingMessage;
    padding-left: 0.15em;
  }
  .routing-number-actual {
    grid-area: routingNumberActual;
    border-bottom: 1px solid black;
  }
  .swift-code-actual {
    grid-area: swiftCodeActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
    "routingNumberLabel routingNumberActual swiftCodeActual"
    "routingMessage . .";
    margin: 0.25em 0;
  }
</style>
