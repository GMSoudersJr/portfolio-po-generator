<script lang="ts">
  import { tax } from "$lib/strings/poForm";

  export let taxActual: number;
  $: value = taxActual.toFixed(0);
</script>

<label for={tax.id}>
  {tax.label}:
  <input
    class={tax.class}
    id={tax.id}
    type="number"
    name={tax.name}
    required
    bind:value={value}
  >
</label>

<style>
</style>
