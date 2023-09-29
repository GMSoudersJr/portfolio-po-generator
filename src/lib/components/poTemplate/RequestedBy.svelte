<script>
  import { requestedBy, required } from "$lib/strings/poSheet";
  export let requestedByName = "Rachel Chung";
</script>

<div class="grid-container">
  <div class="requested-label">
    <h5 class="requested-by-label">
      {requestedBy}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>

  <p class="requested-name">
    {requestedByName}
  </p>
</div>

<style>
  .requested-label {
    display: flex;
    grid-area: requestedBy;
  }
  .requested-by-label {
    font-size: var(--fontSizeRequestedBy);
  }
  .requested-name {
    grid-area: requestedName;
    border-bottom: 3px solid black;
    font-size: var(--fontSizeRequestedBy);
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "requestedBy requestedName";
  }
</style>
