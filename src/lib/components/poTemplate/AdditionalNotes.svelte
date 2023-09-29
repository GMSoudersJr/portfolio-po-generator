<script>
  import {
    additionalNotes,
    nationalIdOrBusinessReg
  } from "$lib/strings/poSheet";

  export let addtionalNotesActual = "811925-33849";
  export let nationalIdOrBusinessRegistrationActual = "";
</script>

<div class="grid-container">
  <h5 class="additional-notes-label">
    {additionalNotes}:
  </h5>
  <p class="national-id-business-registration-label warning">
    {nationalIdOrBusinessReg}
  </p>
  <p class="additional-notes-actual">
    {addtionalNotesActual}
  </p>
  <p class="national-id-business-registration-actual">
    { nationalIdOrBusinessRegistrationActual }
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
  .additional-notes-actual {
    grid-area: addtionalNotesActual;
    border-bottom: 1px solid black;
    font-size: var(--fontSizeSectionDataActual);
  }
  .national-id-business-registration-actual {
    grid-area: nationalIdOrBusinessRegistrationActual;
    border-bottom: 1px solid black;
    font-size: var(--fontSizeSectionDataActual);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
    "additionalNotesLabel addtionalNotesActual"
    "nationalIdOrBusinessRegistrationLabel nationalIdOrBusinessRegistrationActual";
  }
</style>

