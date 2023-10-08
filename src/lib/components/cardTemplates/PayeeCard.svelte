<script lang="ts">
	import {createEventDispatcher} from "svelte";


  export let payeeName: string;
  export let payeeType: string;
  export let payee_id: string;
  export let payee_taxRate: number = 0;
  export let payee_currency: string;
  export let payee_topicDivision: string;
  export let payee_reportingBudgetLine: string;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("clickedPayee", {
      payee: {
        beneficiaryName: payeeName,
        _id: payee_id,
        taxRate: payee_taxRate,
        currency: payee_currency,
        topicDivision: payee_topicDivision,
        reportingBudgetLine: payee_reportingBudgetLine
      }
    })
  }
</script>

<button
  type="button"
  class="payee-card"
  on:click={handleClick}
  value={payeeName}
>
  <h3
    class="header"
    value={payeeName}
  >
    {payeeName}
  </h3>
  <p
    class="body"
    value={payeeName}
  >
    {payeeType}
  </p>
</button>


<style>
  .payee-card {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "header"
    "body";
    row-gap: 0.25rem;
    padding: 0.5rem;
  }
  .header {
    grid-area: header;
  }
  .body {
    grid-area: body;
    color: #777;
  }
</style>

