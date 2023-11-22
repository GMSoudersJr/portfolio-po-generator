<script lang="ts">
  import { pdfTemplateDueByString } from "$lib/strings/poTemplate";

  export let dueDate = "DD/MM/YYYY"
</script>

<div class="grid-container">
  <h5 class="label">
    {pdfTemplateDueByString}:
  </h5>
  <div class="value-container">
    <p class="due-date">
      {dueDate ?? ""}
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    align-items: center;
    row-gap: 8px;
    grid-template-areas:
    "dueBy"
    "dueDate";
  }
  .label {
    color: var(--kellyGreen);
    display: flex;
    grid-area: dueBy;
    letter-spacing: var(--letterSpacingForAllCaps);
    font-size: 12px;
  }
  .value-container {
    grid-area: dueDate;
    background-color: #F1F1F1;
    border-radius: 8px;
    justify-self: stretch;
    text-align: center;
    font-size: var(--fontSizeSectionDataActual);
    height: calc(341.85px / 6.472);
    display: grid;
  }
  .due-date {
    align-self: center;
  }
</style>
