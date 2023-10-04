<script lang="ts">
  import { payeeName } from "$lib/strings/poForm";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    dispatch('searching', {
      query: value
    });
  }
  export let clickedPayeeName = "";
</script>

<label for={payeeName.id}>
  {payeeName.label}:
  <input
    class={payeeName.class}
    id={payeeName.id}
    type={payeeName.type}
    name={payeeName.name}
    required
    on:input={handleInput}
    value={clickedPayeeName}
  >
</label>

<style>
</style>
