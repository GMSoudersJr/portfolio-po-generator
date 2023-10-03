<script>
  import {
    reportingBudgetLine,
    required
  } from "$lib/strings/poTemplate";

  export let reportingBudgetLineActual = "Acquisitions";
</script>

<div class="grid-container">
  <div class="reporting-budget-line-label required-line">
    <h5 class="reporting-budget-line-text section1-data-label">
      {reportingBudgetLine}
    </h5>
    <p class="required warning">
      {required}
    </p>
    <h5>:</h5>
  </div>
  <p class="reporting-budget-line-actual section1-data-actual">
    {reportingBudgetLineActual}
  </p>
</div>

<style>
  .reporting-budget-line-label {
    display: flex;
    grid-area: reportingBudgetLineLabel;
    padding-left: 0.15em;
  }
  .reporting-budget-line-actual {
    grid-area: reportingBudgetLineActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "reportingBudgetLineLabel reportingBudgetLineActual";
    margin: 0.25em 0;
  }
</style>
