<script lang="ts">
	import PayeeCard from "$lib/components/cardTemplates/PayeeCard.svelte";
  export let payees: {
    _id: string,
    beneficiaryName: string,
    typeOfPayee: string
  }[];
</script>

<h6 class="available-payees-title">
  Available Payees:
</h6>
<section class="cards">
  {#each payees as payee (payee._id)}
    <PayeeCard
      payeeName={payee.beneficiaryName}
      payeeType={payee.typeOfPayee}
    />
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
