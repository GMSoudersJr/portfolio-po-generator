<script lang="ts">
  import { subtotal } from "$lib/strings/poForm";

  interface ProductAndServicePricesObject {
    [index: string]: number;
  }

  export let productAndServicePricesObject: ProductAndServicePricesObject;
  $: value = Object.values(productAndServicePricesObject).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
</script>

<label for={subtotal.id}>
  {subtotal.label}:
  <input
    class={subtotal.class}
    id={subtotal.id}
    type="number"
    name={subtotal.name}
    required
    bind:value={value}
  >
</label>

<style>
</style>

