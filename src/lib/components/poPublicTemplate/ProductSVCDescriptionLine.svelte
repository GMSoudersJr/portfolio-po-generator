<script lang="ts">
  export let description = "";
  export let price: number | undefined;
</script>

<div class="grid-container">
  <div class="description-container sub-container">
    <p class="description">
      {description ?? ""}
    </p>
  </div>
  <div class="amount-container sub-container">
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
    grid-template-columns: 3.236fr 1fr;
    grid-template-rows: 2em;
    align-items: center;
    column-gap: 20px;
    row-gap: 8px;
    grid-template-areas:
    "description amount";
  }
  .description-container,
  .amount-container {
    background-color: #F1F1F1;
    border-radius: 8px;
    align-items: center;
    display: grid;
    height: calc(161.41px / 4.854);
  }
  .description-container {
    grid-area: description;
    justify-content: center;
  }
  .amount-container {
    grid-area: amount;
    justify-content: center;
  }
  .description {
    font-size: var(--fontSizeSectionDataLabel);
    font-weight: 700;
  }
  .amount {
    justify-self: end;
    font-size: var(--fontSizePaymentMethodActualAndMoney);
    font-weight: 700;
  }
  .description,
  .amount {
    padding: 8px 0;
  }
</style>
