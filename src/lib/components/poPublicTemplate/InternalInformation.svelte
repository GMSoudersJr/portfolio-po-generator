<script lang="ts">
  import {
    pdfTemplateInternalInformationString
  } from "$lib/strings/poTemplate";
</script>

<div class="grid-container">
  <div class="title">
    <h5 class="section-data-title">
      {pdfTemplateInternalInformationString}
    </h5>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "title";
  }
  .title {
    grid-area: title;
  }
  .section-data-title {
    font-size: var(--fontSizeSectionDataTitle);
    letter-spacing: var(--letterSpacingForAllCaps);
  }
</style>
