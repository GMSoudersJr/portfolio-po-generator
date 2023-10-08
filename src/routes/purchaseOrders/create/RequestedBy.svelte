<script lang="ts">
  import { requestedBy } from "$lib/strings/poForm";
	import {getInitials} from "$lib/utils";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleRequestedByChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const requester = target.value;
    const requesterInitials = getInitials(requester);
    dispatch('requesterChange', {
      poNumber: {
        key: 'requesterInitials',
        value: requesterInitials
      }
    })
  }
</script>

<label for={requestedBy.id}>
  {requestedBy.label}:
  <select
    class={requestedBy.class}
    name={requestedBy.name}
    id={requestedBy.id}
    required
    on:change={handleRequestedByChange}
  >
    {#each requestedBy.options as entry (entry.id)}
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
