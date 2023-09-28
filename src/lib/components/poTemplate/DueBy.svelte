<script>
  import { dueBy } from "$lib/strings/poSheet";

  export let dueDate = "DD/MM/YYYY"
</script>

<div class="grid-container">
  <h5 class="due-by item-a">
    {dueBy}:
  </h5>
  <p class="due-date item-b">
    {dueDate}
  </p>
</div>

<style>
  .due-by {
    grid-area: dueBy;
  }
  .due-date {
    grid-area: dueDate;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr 16.5%;
    grid-template-rows: 1fr;
    grid-template-areas:
    "dueBy dueDate .";
  }
</style>
