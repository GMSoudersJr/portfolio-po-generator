<script>
  import {
    bankingInformation,
    forWirePaymentsOnly
  } from "$lib/strings/poTemplate";
</script>

<div class="grid-container">
  <div class="title">
    <h5 class="section-data-title">
      {bankingInformation}
    </h5>
    <p class="warning">
      {forWirePaymentsOnly}
    </p>
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
