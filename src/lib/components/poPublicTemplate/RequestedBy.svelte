<script lang="ts">
  import {
    pdfTemplateRequestedByString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";
  export let requestedBy = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="requested-label required-line">
    <h5 class="requested-by-label">
      {pdfTemplateRequestedByString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>

  <p class="requested-name">
    {requestedBy ?? ""}
  </p>
</div>

<style>
  .requested-label {
    display: flex;
    grid-area: requestedBy;
  }
  .requested-by-label {
    font-size: var(--fontSizeRequestedBy);
    letter-spacing: -0.011rem;
  }
  .requested-name {
    grid-area: requestedName;
    border-bottom: 3px solid black;
    font-size: var(--fontSizeRequestedBy);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "requestedBy requestedName";
  }
</style>
