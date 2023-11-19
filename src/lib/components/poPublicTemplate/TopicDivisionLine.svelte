<script lang="ts">
  import {
    pdfTemplateTopicDivisionString,
  } from "$lib/strings/poTemplate";

  export let topicDivision = "General";
</script>

<div class="grid-container">
  <h5 class="topic-division-label section1-data-label">
    {pdfTemplateTopicDivisionString}:
  </h5>
  <p class="topic-division-actual section1-data-actual">
    {topicDivision ?? ""}
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
