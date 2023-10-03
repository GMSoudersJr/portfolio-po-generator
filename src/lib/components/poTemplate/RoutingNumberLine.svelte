<script>
  import {
    routingABAOrSwift,
    routingMessage,
    required
  } from "$lib/strings/poTemplate";

  export let routingNumberActual = "2343200094";
  export let swiftCodeActual = "FRBBUS6S";
</script>

<div class="grid-container">
  <div class="routing-number-label required-line">
    <h5 class="routing-number-text section3-data-label">
      {routingABAOrSwift}
    </h5>
    <p class="required warning">
      {required}
    </p>
    <h5>:</h5>
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
    grid-template-columns: 33% 1fr 16.5%;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
    "routingNumberLabel routingNumberActual swiftCodeActual"
    "routingMessage . .";
    row-gap: 0.25em;
    margin: 0.25em 0;
  }
</style>
