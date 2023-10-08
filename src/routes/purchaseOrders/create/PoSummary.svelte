<script lang="ts">
  import { poSummary } from "$lib/strings/poForm";
	import {changeToPascalCase} from "$lib/utils";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const summaryString = target.value;
    const formattedSummaryString = changeToPascalCase(summaryString);
    dispatch('summaryInput', {
      poNumber: {
        key: 'summary',
        value: formattedSummaryString
      }
    })
  }
  $: value = "";
</script>

<label for={poSummary.id}>
  {poSummary.label}:
  <input
    class={poSummary.class}
    id={poSummary.id}
    type="text"
    name={poSummary.name}
    bind:value={value}
    on:change={handleInput}
    required
  >
</label>

<style>
</style>
