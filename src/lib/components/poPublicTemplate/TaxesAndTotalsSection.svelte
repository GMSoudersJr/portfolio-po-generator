<script lang="ts">
	import TotalLine from "./TotalLine.svelte";
import WithholdingTaxOrVat from "./WithholdingTaxOrVat.svelte";

  export let tax: number;
  export let total: number;
  export let currency: string;
</script>

<section class="grid-container">
  <WithholdingTaxOrVat {tax} />
  <TotalLine
    {currency}
    {total}
  />

</section>

<style>
  .grid-container {
    margin-top: 0.5em;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0.5em;
  }
</style>
