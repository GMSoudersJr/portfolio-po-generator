<script lang="ts">
  import { productServiceDescription } from "$lib/strings/poForm";

  export let number: string;
</script>

<label for={`${productServiceDescription.id}${number}`}>
  {productServiceDescription.label} {number}<span>*</span>:
  <input
    class={productServiceDescription.class}
    id={`${productServiceDescription.id}${number}`}
    type={productServiceDescription.type}
    name={`${productServiceDescription.name}${number}`}
    required
  >
</label>

<style>
  span {
    color: var(--warningRed);
  }
</style>
