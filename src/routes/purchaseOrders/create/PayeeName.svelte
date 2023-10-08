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

  export let clickedPayee_id = "";
  $: payee_idValue = clickedPayee_id;

  export let clickedPayeeName = "";
  $: value = clickedPayeeName;
</script>

<label for={payeeName.id}>
  {payeeName.label}:
  <input
    class={payeeName.class}
    id={payeeName.id}
    type="search"
    name={payeeName.name}
    required
    on:input={handleInput}
    bind:value={value}
  >
    <input
      type="hidden"
      name="payee_id"
      id="payee-id"
      value={payee_idValue}
    >
</label>

<style>
</style>
