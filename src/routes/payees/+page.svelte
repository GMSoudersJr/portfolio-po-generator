<script lang="ts">
  import PayeeCards from "../purchaseOrders/create/PayeeCards.svelte";
  import { page } from "$app/stores";
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
{#if payees}
  <section class="available-payees-section">
    <h4 class="available-payees-title">
      Payees
      <GotoFormButton {pathUrl}/>
    </h4>
    <PayeeCards
      on:clickedPayee={handleClickedPayee}
      {payees}
    />
  </section>
{/if}
</main>

<style>
  .page-container {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 800px) 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    ". payees .";
  }
  .available-payees-section {
    grid-area: payees;
  }
  .available-payees-title {
    padding-top: 1rem;
    padding-left: 1rem;
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: min-content;
    column-gap: 0.5rem;
    align-items: center;
  }
</style>
