<script lang="ts">
  import { subtotal } from "$lib/strings/poForm";

  interface SubtotalObject {
    [index: string]: number;
  }

  export let subtotalActual: number;
</script>

<label for={subtotal.id}>
  {subtotal.label}:
  <input
    class={subtotal.class}
    id={subtotal.id}
    type="number"
    name={subtotal.name}
    disabled
    bind:value={subtotalActual}
  >
</label>

<style>
</style>

