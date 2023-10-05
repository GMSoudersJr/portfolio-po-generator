<script>
  import { productServiceDescription } from "$lib/strings/poForm";

  /**
   *@type string
   */
  export let number;
</script>

<label for={`${productServiceDescription.id}${number}`}>
  {productServiceDescription.label} {number}:
  <input
    class={productServiceDescription.class}
    id={`${productServiceDescription.id}${number}`}
    type={productServiceDescription.type}
    name={`${productServiceDescription.name}${number}`}
    required={number == "1"}
  >
</label>

<style>
</style>
