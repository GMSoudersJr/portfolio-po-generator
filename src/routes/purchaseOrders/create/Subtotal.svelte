<script lang="ts">
  import { subtotal } from "$lib/strings/poForm";

  export let subtotalActual: number;
  $: value = subtotalActual;
</script>

<label for={subtotal.id}>
  {subtotal.label}:
  <input
    class={subtotal.class}
    id={subtotal.id}
    type="number"
    name={subtotal.name}
    bind:value={value}
  >
</label>

<style>
</style>

