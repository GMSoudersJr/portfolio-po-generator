<script lang="ts">
  import {
    pdfTemplateRoutingOrABAString,
    pdfTemplateRoutingMessageString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let routingNumber = "123456789";
  export let swiftCode = "AAAA-BB-CC-123";
</script>

<div class="grid-container">
  <div class="routing-number-label required-line">
    <h5 class="routing-number-text section3-data-label">
      {pdfTemplateRoutingOrABAString}:
    </h5>
  </div>
  <p class="routing-message warning">
    {pdfTemplateRoutingMessageString}
  </p>
  <p class="routing-number-actual section3-data-actual">
    {routingNumber ?? ""}
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
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
    "routingNumberLabel routingNumberActual"
    "routingMessage .";
    row-gap: 0.25em;
    margin: 0.25em 0;
  }
</style>
