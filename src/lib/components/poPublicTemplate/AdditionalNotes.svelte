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
  <div class="note-container">
    <p class="additional-notes-line1">
      {nationalIdOrBusinessRegistrationNumber ?? ""}
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content) auto;
    justify-content: center;
    grid-template-areas:
    "additionalNotesLabel"
    "nationalIdOrBusinessRegistrationLabel"
    "line1";
  }
  .additional-notes-label {
    grid-area: additionalNotesLabel;
    font-size: var(--fontSizeSectionDataLabel);
  }
  .national-id-business-registration-label {
    grid-area: nationalIdOrBusinessRegistrationLabel;
  }
  .note-container {
    grid-area: line1;
    font-size: var(--fontSizeSectionDataActual);
    background-color: #F1F1F1;
    border-radius: 12px;
    text-align: center;
    padding: 1rem 0;
  }
  .additional-notes-line1 {
    place-self: center;
  }
</style>

