<script lang="ts">
  import {
    pdfTemplateDateString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let createdDate = "ddmmyyyy";
</script>

<div class="grid-container">
  <div class="date-label required-line">
    <h5 class="date-text section1-data-label">
      {pdfTemplateDateString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="date-actual section1-data-actual">
    {createdDate ?? ""}
  </p>
</div>

<style>
  .date-label {
    display: flex;
    grid-area: dateLabel;
    padding-left: 0.15em;
  }
  .date-actual {
    grid-area: dateActual;
  }
  .date-actual {
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "dateLabel dateActual";
    margin: 0.25em 0;
  }
</style>

