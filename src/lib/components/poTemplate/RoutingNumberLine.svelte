<script lang="ts">
  import {
    pdfTemplateRoutingABAOrSwiftString,
    pdfTemplateRoutingMessageString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let routingNumber = "123456789";
  export let swiftCode = "AAAA-BB-CC-123";
</script>

<div class="grid-container">
  <div class="routing-number-label required-line">
    <h5 class="routing-number-text section3-data-label">
      {pdfTemplateRoutingABAOrSwiftString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="routing-message warning">
    {pdfTemplateRoutingMessageString}
  </p>
  <p class="routing-number-actual section3-data-actual">
    {routingNumber ?? ""}
  </p>
  <p class="swift-code-actual section3-data-actual">
    {swiftCode ?? ""}
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
