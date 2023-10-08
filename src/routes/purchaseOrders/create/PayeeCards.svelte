<script lang="ts">
	import PayeeCard from "$lib/components/cardTemplates/PayeeCard.svelte";
	import type { Document } from "mongodb";

  export let payees: Document[];
  console.log(payees);
</script>

<h6 class="available-payees-title">
  Available Payees:
</h6>
<section class="cards">
  {#each payees as payee (payee._id)}
    {#if payee.shouldBeShown}
      <PayeeCard
        payeeName={payee.beneficiaryName}
        payeeType={payee.typeOfPayee}
        payee_id={payee._id}
        payee_taxRate={payee.taxRate}
        payee_currency={payee.currency}
        payee_topicDivision={payee.topicDivision}
        payee_reportingBudgetLine={payee.reportingBudgetLine}
        on:clickedPayee
      />
    {/if}
  {/each}
</section>


<style>
  .available-payees-title {
    padding-top: 1rem;
    padding-left: 1rem;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.25rem;
    padding: 1rem;
  }
</style>
