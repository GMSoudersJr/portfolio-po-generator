<script lang="ts">
  import { price } from "$lib/strings/poForm";

  export let number: string;
</script>

<label for={`${price.id}${number}`}>
  {price.label}:
  <input
    class={price.class}
    id={`${price.id}${number}`}
    type={price.type}
    name={`${price.name}${number}`}
    min="0"
    required={number == "1"}
  >
</label>

<style>
</style>
