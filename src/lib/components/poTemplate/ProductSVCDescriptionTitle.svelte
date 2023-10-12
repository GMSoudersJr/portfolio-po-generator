<script lang="ts">
  import {
    pdfTemplateIfEventRelatedString,
    pdfTemplateProductServiceDescriptionString
  } from "$lib/strings/poTemplate";
</script>

<div class="grid-container">
  <div class="description">
    <h5 class="section2-data-label">
      {pdfTemplateProductServiceDescriptionString}
    </h5>
    <p class="warning">
      {pdfTemplateIfEventRelatedString}
    </p>
  </div>
</div>

<style>
  .description {
    grid-area: description;
    border-right: 1px solid black;
    display: flex;
    align-items: center;
    column-gap: 0.2em;
    padding-top: 0.25em;
    padding-left: 0.15em;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: auto;
    grid-template-areas:
    "description .";
  }

</style>
