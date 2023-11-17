<script lang="ts">
  import {
    pdfTemplateApprovedByString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let approvedBy = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="approved-label required-line">
    <h5 class="approved-by-label">
      {pdfTemplateApprovedByString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>

  <p class="approved-name">
    {approvedBy ?? ""}
  </p>
</div>

<style>
  .approved-label {
    display: flex;
    grid-area: approvedBy;
  }
  .approved-by-label {
    font-size: var(--fontSizeRequestedBy);
    letter-spacing: var(--letterSpacingForAllCaps);
  }
  .approved-name {
    grid-area: approvedName;
    border-bottom: 3px solid black;
    font-size: var(--fontSizeRequestedBy);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "approvedBy approvedName";
  }
</style>
