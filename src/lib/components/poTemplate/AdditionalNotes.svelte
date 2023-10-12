<script lang="ts">
  import {
    pdfTemplateAdditionalNotesString,
    pdfTemplateNationalIdOrBusinessRegString
  } from "$lib/strings/poTemplate";

  export let additionalNotes = "";
  export let nationalIdOrBusinessRegistrationNumber = "811925-33849";
</script>

<div class="grid-container">
  <h5 class="additional-notes-label">
    {pdfTemplateAdditionalNotesString}:
  </h5>
  <p class="national-id-business-registration-label warning">
    {pdfTemplateNationalIdOrBusinessRegString}
  </p>
  <p class="additional-notes-line1">
    {nationalIdOrBusinessRegistrationNumber ?? ""}
  </p>
  <p class="additional-notes-line2">
    {additionalNotes ?? ""}
  </p>
</div>

<style>
  .additional-notes-label {
    grid-area: additionalNotesLabel;
    font-size: var(--fontSizeSectionDataLabel);
  }
  .national-id-business-registration-label {
    grid-area: nationalIdOrBusinessRegistrationLabel;
  }
  .additional-notes-line1 {
    grid-area: line1;
    border-bottom: 1px solid black;
    font-size: var(--fontSizeSectionDataActual);
  }
  .additional-notes-line2 {
    grid-area: line2;
    border-bottom: 1px solid black;
    font-size: var(--fontSizeSectionDataActual);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
    "additionalNotesLabel line1"
    "nationalIdOrBusinessRegistrationLabel line2";
  }
</style>

