<script lang="ts">
  import { pdfTemplateDueByString } from "$lib/strings/poTemplate";

  export let dueDate = "DD/MM/YYYY"
</script>

<div class="grid-container">
  <h5 class="label">
    {pdfTemplateDueByString}:
  </h5>
  <p class="due-date">
    {dueDate ?? ""}
  </p>
</div>

<style>
  .label {
    display: flex;
    grid-area: dueBy;
    letter-spacing: var(--letterSpacingForAllCaps);
    padding: 5px 0;
    font-size: 12px;
  }
  .due-date {
    grid-area: dueDate;
    background-color: #F1F1F1;
    border-radius: 12px;
    justify-self: stretch;
    text-align: center;
    padding: 8px;
    font-size: var(--fontSizeSectionDataActual);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    grid-template-areas:
    "dueBy"
    "dueDate";
  }
</style>
