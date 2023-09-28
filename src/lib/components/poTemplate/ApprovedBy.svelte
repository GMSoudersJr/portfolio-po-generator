<script>
  import { approvedBy, required } from "$lib/strings/poSheet";
  export let approvedByName = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="approved-label">
    <h5>
      {approvedBy}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>

  <div class="approved-name">
    <p>
      {approvedByName}
    </p>
  </div>
</div>

<style>
  .approved-label {
    display: flex;
    grid-area: approvedBy;
  }
  .approved-name {
    grid-area: approvedName;
    border-bottom: 3px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "approvedBy approvedName .";

  }
</style>

