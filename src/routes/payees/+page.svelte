<script lang="ts">
  import PayeeCards from "../purchaseOrders/create/PayeeCards.svelte";
  import type { PageData } from "./$types";
	import {goto} from "$app/navigation";
  import GotoFormButton from "$lib/components/GotoFormButton.svelte";

  async function handleClickedPayee() {
    await goto('/purchaseOrders/create');
  }

  const pathUrl = '/payees/create';
  export let data: PageData;
  $: ({payees} = data);
</script>

<main class="page-container">
  <div class="available-payees-title">
    <h2>
      Payees
    </h2>
    <GotoFormButton {pathUrl}/>
  </div>
  <section class="available-payees-section">
  {#if payees && payees.length > 0}
    <PayeeCards
      on:clickedPayee={handleClickedPayee}
      {payees}
    />
  {:else}
    <h3 class="no-payees">
      Add Payees to see them here
    </h3>
{/if}
  </section>
</main>

<style>
  .page-container {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 800px) 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
    ". title ."
    ". payees .";
    row-gap: 1em;
  }
  .no-payees {
    grid-area: payees;
    text-align: center;
  }
  .available-payees-section {
    grid-area: payees;
  }
  .available-payees-title {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: min-content;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    grid-area: title;
  }
</style>

