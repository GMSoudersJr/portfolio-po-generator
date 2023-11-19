<script lang="ts">
  export let description = "";
  export let price: number | undefined;
</script>

<div class="grid-container">
  <div class="description-container">
    <p class="description">
      {description ?? ""}
    </p>
  </div>
  <div class="amount-container">
    <p class="amount">
      {#if price && price > 0}
        {price?.toLocaleString('en-US')}
      {:else}
        {""}
      {/if}
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: 2em;
    align-items: center;
    column-gap: 0.5em;
    grid-template-areas:
    "description amount";
  }
  .description-container,
  .amount-container {
    height: 2em;
    background-color: #F1F1F1;
    border-radius: 12px;
    justify-self: stretch;
    text-align: center;
    align-items: center;
  }
  .description-container {
    grid-area: description;
  }
  .amount-container {
    grid-area: amount;
  }
  .description {
    font-size: var(--fontSizeSectionDataLabel);
    font-weight: 700;
  }
  .amount {
    justify-self: end;
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    font-weight: 700;
    padding: 0 0.5em;
  }
  .description,
  .amount {
    padding: 8px 0;
  }
</style>
