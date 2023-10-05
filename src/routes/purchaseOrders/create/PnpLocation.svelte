<script lang="ts">
  import { pnpLocation } from "$lib/strings/poForm";
</script>

<label for={pnpLocation.id}>
  {pnpLocation.label}:
  <select
    class={pnpLocation.class}
    name={pnpLocation.name}
    id={pnpLocation.id}
    required
  >
    {#each pnpLocation.options as entry (entry.id)}
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
