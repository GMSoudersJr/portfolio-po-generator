<script lang="ts">
  import {
    pdfTemplateDateString,
  } from "$lib/strings/poTemplate";

  export let createdDate = "ddmmyyyy";
</script>

<div class="grid-container">
  <h5 class="date-label section1-data-label">
    {pdfTemplateDateString}:
  </h5>
  <p class="date-actual section1-data-actual">
    {createdDate ?? ""}
  </p>
</div>

<style>
  .date-label {
    display: flex;
    grid-area: dateLabel;
  }
  .date-actual {
    grid-area: dateActual;
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

