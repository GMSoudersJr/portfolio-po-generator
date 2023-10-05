<script lang="ts">
  import { subtotal } from "$lib/strings/poForm";

  export let productAndServicePricesObject;
  export let clickedPayeeTaxRate;
</script>

<label for={subtotal.id}>
  {subtotal.label}:
  <input
    class={subtotal.class}
    id={subtotal.id}
    type={subtotal.type}
    name={subtotal.name}
    required
  >
</label>

<style>
</style>

