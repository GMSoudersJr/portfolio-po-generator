<script>
  import {
    date,
    required
  } from "$lib/strings/poTemplate";

  export let dateActual = "020922";
</script>

<div class="grid-container">
  <div class="date-label">
    <h5 class="date-text section1-data-label">
      {date}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="date-actual section1-data-actual">
    {dateActual}
  </p>
</div>

<style>
  .date-label {
    display: flex;
    grid-area: dateLabel;
    padding-left: 0.15em;
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
    margin: 0.25em 0;
  }
</style>

