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
    grid-template-rows: auto;
    grid-template-areas:
    "title";
    justify-content: center;
    margin: 0.25em 0;
  }
  .title {
    grid-area: title;
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 8px;
    text-align: center;
  }
  .section-data-title {
    font-size: var(--fontSizeSectionDataTitle);
    letter-spacing: var(--letterSpacingForAllCaps);
  }
</style>
