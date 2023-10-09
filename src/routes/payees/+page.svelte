<script lang="ts">
  import PayeeCards from "../purchaseOrders/create/PayeeCards.svelte";
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
	import {goto} from "$app/navigation";

  async function handleClickedPayee() {
    await goto('/purchaseOrders/create');
  }

  export let data: PageData;
   $: ({payees} = data);
</script>

<main class="page-container">

{#if payees}
  <section class="available-payees-section">
    <h4 class="available-payees-title">
      Payees
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
  }
</style>
