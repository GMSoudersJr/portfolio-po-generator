<script>
  import { requestedBy, required } from "$lib/strings/poSheet";
  export let requestedByName = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="requested-label">
    <h5>
      {requestedBy}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>

  <div class="requested-name">
    <p>
      {requestedByName}
    </p>
  </div>
</div>

<style>
  .requested-label {
    display: flex;
    grid-area: requestedBy;
  }
  .requested-name {
    grid-area: requestedName;
    border-bottom: 3px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "requestedBy requestedName .";
  }
</style>
