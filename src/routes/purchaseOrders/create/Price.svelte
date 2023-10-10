<script lang="ts">
  import { price } from "$lib/strings/poForm";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    dispatch("priceInput", {
      price: {
        for: `price${number}`,
        value: value
      }
    })
  }

  export let number: string;
  let value = 0;
</script>

<label for={`${price.id}${number}`}>
  {price.label}:
  <input
    class={price.class}
    id={`${price.id}${number}`}
    type=number
    name={`${price.name}${number}`}
    min="0"
    bind:value={value}
    required
    on:input={handleChange}
  >
</label>

<style>
</style>
