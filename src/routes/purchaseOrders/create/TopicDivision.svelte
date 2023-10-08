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

</script>

<label for={topicDivision.id}>
  {topicDivision.label}:
  <select
    class={topicDivision.class}
    name={topicDivision.name}
    id={topicDivision.id}
    on:select={handleTopicDivisionSelected}
    on:change={handleTopicDivisionSelected}
    required
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
