<script lang="ts">
  import SubtotalAndTotalWidget from "./SubtotalAndTotalWidget.svelte";
  import WithholdingTaxOrVat from "./WithholdingTaxOrVat.svelte";

  export let tax: number;
  export let total: number;
  export let currency: string;
  export let taxRate: number;
  export let subtotal: number;
</script>

<section class="grid-container">
  <SubtotalAndTotalWidget
    label={"subtotal"}
    value={subtotal}
  />
  <WithholdingTaxOrVat
    {taxRate}
    {tax}
  />
  <SubtotalAndTotalWidget
    label={"total"}
    value={total}
    {currency}
  />
</section>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0.5em;
  }
</style>
