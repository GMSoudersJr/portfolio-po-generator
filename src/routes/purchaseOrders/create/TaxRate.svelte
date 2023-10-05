<script lang="ts">
  import { taxRate } from "$lib/strings/poForm";
  export let clickedPayeeTaxRate: number;
</script>

<label for={taxRate.id}>
  {taxRate.label}:
  <input
    class={taxRate.class}
    id={taxRate.id}
    type="number"
    name={taxRate.name}
    min="0"
    step="0.1"
    disabled
    bind:value={clickedPayeeTaxRate}
    required
  >
</label>

<style>
</style>
