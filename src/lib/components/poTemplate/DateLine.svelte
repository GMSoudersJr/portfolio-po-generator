<script>
  import {
    date,
    required
  } from "$lib/strings/poSheet";

  export let dateActual = "020922";
</script>

<div class="grid-container">
  <div class="date-label item-a">
    <h5 class="date-text item-a">
      {date}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="date-actual">
    {dateActual}
  </p>
</div>

<style>
  .date-label {
    display: flex;
    grid-area: dateLabel;
  }
  .date-actual {
    grid-area: dateActual;
  }
  .date-actual {
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "dateLabel dateActual";
  }
</style>

