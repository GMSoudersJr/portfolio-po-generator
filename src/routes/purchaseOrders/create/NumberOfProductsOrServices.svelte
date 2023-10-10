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
    class="products-button decrement"
    on:click={handleDecrement}>
    -
  </button>
  <button
    type="button"
    class="products-button increment"
    on:click={numberOfProductsOrServices.increment}>
    +
  </button>
</div>

<style>
  .number-and-button-container {
    display: grid;
    grid-template-columns: 80% repeat(2, 1fr);
    grid-template-rows: min-content;
    grid-template-areas:
    "number decrement increment";
    justify-content: center;
    align-items: center;
  }
  .number {
    grid-area: number;
    align-self: center;
  }
  .decrement {
    grid-area: decrement;
    place-self: center;
  }
  .decrement:focus, .decrement:hover {
    background-color: #100;
    color: #FFF;
  }
  .increment {
    grid-area: increment;
    place-self: center;
  }
  .increment:focus, .increment:hover {
    background-color: #259259;
    color: #FFF;
  }
  .products-button {
    height: 100%;
    font-size: 1rem;
    font-weight: 550;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
  }
</style>
