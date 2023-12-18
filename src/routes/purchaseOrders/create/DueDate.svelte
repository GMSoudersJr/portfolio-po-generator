<script lang="ts">
  import { dueDate } from "$lib/strings/poForm";
	import {formatPoNumberDateString} from "$lib/utils";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleDueDateLoad(event: Event) {
    const target = event.target as HTMLInputElement;
    const dateString = target.value;
    const formattedDateString = formatPoNumberDateString(dateString);
    dispatch('dueDateLoad', {
      poNumber: {
        key: 'dueDate',
        value: formattedDateString
      }
    })
  }
  $: value = dueDate.value;

</script>

<label for={dueDate.id}>
  {dueDate.label}<span>*</span>:
  <input
    class={dueDate.class}
    type="date"
    name={dueDate.name}
    id={dueDate.id}
    min={dueDate.min}
    bind:value={value}
    on:load={handleDueDateLoad}
    on:change={handleDueDateLoad}
    required
  >
</label>

<style>
  span {
    color: var(--warningRed);
  }
</style>
