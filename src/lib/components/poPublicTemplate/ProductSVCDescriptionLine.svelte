<script lang="ts">
  export let description = "";
  export let price: number | undefined;
</script>

<div class="grid-container">
  <div class="description">
    <p class="product-service-description">
      {description ?? ""}
    </p>
  </div>
  <p class="amount">
    {#if price && price > 0}
      {price?.toLocaleString('en-US')}
    {:else}
      {""}
    {/if}
  </p>
</div>

<style>
  .description {
    grid-area: description;
    display: flex;
    padding: 0 0.5em;
  }
  .product-service-description {
    font-size: var(--fontSizeSectionDataLabel);
    font-weight: 700;

  }
  .amount {
    grid-area: amount;
    justify-self: end;
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    font-weight: 700;
    padding: 0 0.5em;
  }
  .grid-container {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: 1.3rem;
    grid-template-rows: 2em;
    align-items: center;
    grid-template-areas:
    "description amount";
  }

</style>
