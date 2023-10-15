<script lang="ts">
  import {
    pdfTemplateSwiftString,
    pdfTemplateSwiftMessageString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let swiftCode = "AAAA-BB-CC-123";
</script>

<div class="grid-container">
  <div class="swift-code-label required-line">
    <h5 class="swift-code-text section3-data-label">
      {pdfTemplateSwiftString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="swift-message warning">
    {pdfTemplateSwiftMessageString}
  </p>
  <p class="swift-code-actual section3-data-actual">
    {swiftCode ?? ""}
  </p>
</div>

<style>
  .swift-code-label {
    display: flex;
    grid-area: swiftCodeLabel;
    padding-left: 0.15em;
  }
  .swift-message {
    grid-area: swiftMessage;
    padding-left: 0.15em;
  }
  .swift-code-actual {
    grid-area: swiftCodeActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
    "swiftCodeLabel swiftCodeActual"
    "swiftMessage .";
    row-gap: 0.25em;
    margin: 0.25em 0;
  }
</style>

