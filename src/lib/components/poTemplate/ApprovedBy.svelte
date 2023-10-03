<script>
  import { approvedBy, required } from "$lib/strings/poTemplate";
  export let approvedByName = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="approved-label required-line">
    <h5 class="approved-by-label">
      {approvedBy}
    </h5>
    <p class="required warning">
      {required}
    </p>
    <h5>:</h5>
  </div>

  <p class="approved-name">
    {approvedByName}
  </p>
</div>

<style>
  .approved-label {
    display: flex;
    grid-area: approvedBy;
  }
  .approved-by-label {
    font-size: var(--fontSizeApprovedBy);
  }
  .approved-name {
    grid-area: approvedName;
    border-bottom: 3px solid black;
    font-size: var(--fontSizeApprovedBy);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "approvedBy approvedName";
  }
</style>
