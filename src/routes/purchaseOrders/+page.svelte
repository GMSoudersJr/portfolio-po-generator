<script>
	import GotoFormButton from "$lib/components/GotoFormButton.svelte";

  const pathUrl = '/purchaseOrders/create';
</script>

<div class="purchase-order-header">
  <h4>
    Purchase Orders
  </h4>
  <GotoFormButton {pathUrl}/>
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

