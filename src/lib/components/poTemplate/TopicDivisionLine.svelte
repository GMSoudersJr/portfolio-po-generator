<script>
  import {
    topicDivision,
    required
  } from "$lib/strings/poSheet";

  export let topicDivisionActual = "General";
</script>

<div class="grid-container">
  <div class="topic-division-label item-a">
    <h5 class="date-text item-a">
      {topicDivision}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="topic-division-actual">
    {topicDivisionActual}
  </p>
</div>

<style>
  .topic-division-label {
    display: flex;
    grid-area: topicDivisionLabel;
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
  }
</style>
