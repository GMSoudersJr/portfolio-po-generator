<script>
  import {
    reportingBudgetLine,
    required
  } from "$lib/strings/poSheet";

  export let reportingBudgetLineActual = "Acquisitions";
</script>

<div class="grid-container">
  <div class="reporting-budget-line-label item-a">
    <h5 class="reporting-budget-line-text item-a">
      {reportingBudgetLine}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="reporting-budget-line-actual">
    {reportingBudgetLineActual}
  </p>
</div>

<style>
  .reporting-budget-line-label {
    display: flex;
    grid-area: reportingBudgetLineLabel;
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
  }
</style>
