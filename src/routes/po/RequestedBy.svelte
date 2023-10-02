<script lang="ts">
  import { requestedBy } from "$lib/strings/poForm";
</script>

<label for={requestedBy.id}>
  {requestedBy.label}:
  <select
    class={requestedBy.class}
    name={requestedBy.name}
    id={requestedBy.id}
    required
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
