<script>
  import {
    additionalNotes,
    nationalIdOrBusinessReg
  } from "$lib/strings/poSheet";

  export let addtionalNotesActual = "";
  export let nationalIdOrBusinessRegistrationActual = "";
</script>

<div class="grid-container">
  <div class="additional-notes-label item-a">
    <h5 class="routing-number-text item-a">
      {additionalNotes}:
    </h5>
  </div>
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
  }
  .national-id-business-registration-label {
    grid-area: nationalIdOrBusinessRegistrationLabel;
  }
  .additional-notes-actual {
    grid-area: addtionalNotesActual;
    border-bottom: 1px solid black;
  }
  .national-id-business-registration-actual {
    grid-area: nationalIdOrBusinessRegistrationActual;
    border-bottom: 1px solid black;
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

