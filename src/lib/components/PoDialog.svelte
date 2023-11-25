<script lang="ts">
  import {
    poGreeting,
    poActions
  } from "$lib/strings/dialogs";

</script>

<dialog
  class="po-dialog"
  id="po-dialog"
>
  <h2 class="greeting header">
    {poGreeting}
  </h2>
  <div class="options-container">
    {#each poActions as action}
      <button
      >
        {action}
      </button>
    {/each}
  </div>
  <div class="go-back">
    <a href="/purchaseOrders/">Back to Purchase Orders</a>
  </div>
</dialog>

<style>
  .key-dialog[open] {
    width: 600px;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    row-gap: 1.2rem;
    padding: 1rem 2rem;
  }
  h2 {
    line-height: 100%;
    color: #259;
  }
  .go-home {
    justify-self: end;
  }
  .header {
    letter-spacing: -0.02rem;
  }
  ::backdrop {
    backdrop-filter: blur(5px);
  }
  li {
    line-height: 1.5;
  }
  ol > li:first-child {
    padding-top: 0.2rem;
    padding-bottom: 0.5rem;
  }
</style>
