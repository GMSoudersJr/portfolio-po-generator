<script lang="ts">
	import type {PageData} from "./$types";
	import PayeeCards from "./PayeeCards.svelte";
	import PoForm from "./PoForm.svelte";

  export let data: PageData;

  let payees = data.payees;
  let clickedPayeeName = "";

  function handleSearch(event: CustomEvent) {
    const query = event.detail.query.toLowerCase();
    payees?.forEach(payee => {
      const shouldBeShown = payee.beneficiaryName.toLowerCase().includes(query);
      payee.shouldBeShown = shouldBeShown;
    });
    payees = payees;
  }

  function handleClickedPayee(event: CustomEvent) {
    const payeeName = event.detail.payee.beneficiaryName;
    const _id = event.detail.payee._id;
    clickedPayeeName = payeeName;
  }


</script>

<div class="page-grid-container">
  <div class="available-payees">
    <PayeeCards
      on:clickedPayee={handleClickedPayee}
      {payees}
    />
  </div>
  <div class="po-form">
    <PoForm
      on:searching={handleSearch}
      {clickedPayeeName}
    />
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

