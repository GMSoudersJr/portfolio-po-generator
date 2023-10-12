<script lang="ts">
  export let description = "";
  export let price = "";
</script>

<div class="grid-container">
  <div class="description">
    <p class="product-service-description">
      {description ?? ""}
    </p>
  </div>
  <p class="amount">
    {price ?? ""}
  </p>
</div>

<style>
  .description {
    grid-area: description;
    border-right: 1px solid black;
    display: flex;
    padding-top: 0.25em;
    padding-left: 0.15em;
    padding-right: 0.15em;
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
    padding-top: 0.25em;
    padding-right: 0.15em;
  }
  .grid-container {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: 17.6px;
    grid-template-areas:
    "description amount";
  }

</style>
