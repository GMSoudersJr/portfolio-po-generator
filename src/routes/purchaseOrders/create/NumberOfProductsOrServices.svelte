<script lang="ts">
  import { numberOfProductsOrServices } from "$lib/stores";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function handleDecrement() {
    numberOfProductsOrServices.decrement();
    dispatch('removalOfProductOrService', {
      price: {
        for: `price${$numberOfProductsOrServices}`
      }
    })
  }
</script>

<div class="number-and-button-container">
  <p class="number">
    Number of Products / Services: {$numberOfProductsOrServices}
  </p>
  <button
    type="button"
    class="po-number-button increment"
    on:click={numberOfProductsOrServices.increment}>
    +
  </button>
  <button
    type="button"
    class="po-number-button decrement"
    on:click={handleDecrement}>
    -
  </button>
</div>

<style>
  .number-and-button-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
    "number increment"
    "number decrement";
  }
  .number {
    grid-area: number;
    align-self: center;
  }
  .decrement {
    grid-area: decrement;
  }
  .increment {
    grid-area: increment;
  }
  .po-number-button {
    color: blue;
  }
</style>
