<script lang="ts">
  import {
    pdfTemplateTopicDivisionString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let topicDivision = "General";
</script>

<div class="grid-container">
  <div class="topic-division-label required-line">
    <h5 class="date-text section1-data-label">
      {pdfTemplateTopicDivisionString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
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
