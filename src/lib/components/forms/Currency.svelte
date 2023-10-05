<script lang="ts">
  import { currency } from "$lib/strings/poForm";
</script>

<label for={currency.id}>
  {currency.label}:
  <select
    class={currency.class}
    name={currency.name}
    id={currency.id}
    required
  >
    {#each currency.options as entry (entry.id)}
      <option
        value={entry.value}
      >
        {entry.abbreviation}
      </option>

    {/each}
  </select>
</label>

<style>
</style>
