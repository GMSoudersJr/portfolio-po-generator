<script lang="ts">
	import type {PageData} from "./$types";
	import PayeeCards from "./PayeeCards.svelte";

	import PoForm from "./PoForm.svelte";
  export let data: PageData;
  let payees = data.payees;
</script>

<div class="page-grid-container">
  <div class="available-payees">
    <PayeeCards {payees} />
  </div>
  <div class="po-form">
    <PoForm />
  </div>
</div>

<style>
  .page-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
    "availablePayees poForm .";
    column-gap: 2rem;
  }
  .available-payees {
    grid-area: availablePayees;
  }
  .po-form {
    grid-area: poForm;
  }
</style>

