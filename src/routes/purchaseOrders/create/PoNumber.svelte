<script lang="ts">
  import { poNumber } from "$lib/strings/poForm";
  import type { PoFormPoNumber } from "$lib/classes";

  export let poNumberActual: PoFormPoNumber;
  $: value = Object.values(poNumberActual).join('-');
</script>

<label for={poNumber.id}>
  {poNumber.label}:
  <input
    class={poNumber.class}
    id={poNumber.id}
    type="text"
    name={poNumber.name}
    value={value}
    required
  >
</label>

<style>
</style>
