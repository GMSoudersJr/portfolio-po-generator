<script lang="ts">
	import GotoFormButton from "$lib/components/GotoFormButton.svelte";
  import type { PageData } from "./$types";
  import PurchaseOrdersTable from "./PurchaseOrdersTable.svelte";


  const pathUrl = '/purchaseOrders/create';
  export let data: PageData;
  console.log(data);
  $: ({ overviewPos } = data)
</script>

<div class="page-container">
  <div class="purchase-order-header">
    <h4>
      Purchase Orders
    </h4>
    <GotoFormButton {pathUrl}/>
  </div>
  <main class="pos-overview">
    {#await overviewPos}
      <p>Loading...</p>
    {:then overviewPos} 
      <PurchaseOrdersTable {overviewPos} />
    {/await}
  </main>
</div>

<style>
  .purchase-order-header {
    padding-top: 1rem;
    padding-left: 1rem;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: min-content;
    column-gap: 0.5rem;
    align-items: center;
  }
</style>

