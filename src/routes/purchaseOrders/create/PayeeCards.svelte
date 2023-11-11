<script lang="ts">
	import PayeeCard from "$lib/components/cardTemplates/PayeeCard.svelte";
	import type { Document } from "mongodb";

  export let payees: Document[];
</script>

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
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-template-rows: auto;
    gap: 0.25rem;
    justify-content: center;
    align-items: stretch;
    padding: 1rem;

  }
</style>
