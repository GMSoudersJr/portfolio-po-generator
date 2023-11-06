<script lang="ts">
  import { businessLocation } from "$lib/strings/poForm";
</script>

<label for={businessLocation.id}>
  {businessLocation.label}:
  <select
    class={businessLocation.class}
    name={businessLocation.name}
    id={businessLocation.id}
    required
  >
    {#each businessLocation.options as entry (entry.id)}
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
