<script>
  import {
    topicDivision,
    required
  } from "$lib/strings/poSheet";

  export let topicDivisionActual = "General";
</script>

<div class="grid-container">
  <div class="topic-division-label">
    <h5 class="date-text section1-data-label">
      {topicDivision}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="topic-division-actual section1-data-actual">
    {topicDivisionActual}
  </p>
</div>

<style>
  .topic-division-label {
    display: flex;
    grid-area: topicDivisionLabel;
    padding-left: 0.15em;
  }
  .topic-division-actual {
    grid-area: topicDivisionActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "topicDivisionLabel topicDivisionActual";
    margin: 0.25em 0;
  }
</style>
