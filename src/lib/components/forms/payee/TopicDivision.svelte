<script lang="ts">
  import { topicDivision } from "$lib/strings/poForm";
	import {changeToPascalCase} from "$lib/utils";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleTopicDivisionSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const topicDivision = target.value;
    const pascalCasedTopicDivision = changeToPascalCase(topicDivision);
    dispatch('topicDivisionSelected', {
      poNumber: {
        key: 'topicDivision',
        value: pascalCasedTopicDivision
      }
    })
  }

  export let value: string;
  export let disabled: boolean;
  $: selected = value || topicDivision.options.at(0)?.value;
</script>

<label for={topicDivision.id}>
  {topicDivision.label}:
  <select
    class={topicDivision.class}
    name={topicDivision.name}
    id={topicDivision.id}
    bind:value={selected}
    on:select={handleTopicDivisionSelected}
    on:change={handleTopicDivisionSelected}
    on:input={handleTopicDivisionSelected}
    required
    {disabled}
  >
    {#each topicDivision.options as entry (entry.id)}
      <option
        value={entry.value}
      >
        {entry.text}
      </option>

    {/each}
  </select>
</label>

<style>
</style>
