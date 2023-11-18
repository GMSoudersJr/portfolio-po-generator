<script lang="ts">
  import {
    pdfTemplatePaymentInformationString,
  } from "$lib/strings/poTemplate";
</script>

<div class="grid-container">
  <div class="title">
    <h5 class="section-data-title">
      {pdfTemplatePaymentInformationString}
    </h5>
  </div>
</div>

<style>
  .title {
    grid-area: title;
    display: flex;
    column-gap: .2em;
  }
  .section-data-title {
    font-size: var(--fontSizeSectionDataTitle);
    letter-spacing: var(--letterSpacingForAllCaps);
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "title";
    justify-content: center;
    margin: 0.25em 0;
  }
</style>
