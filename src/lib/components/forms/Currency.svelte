<script lang="ts">
  import { currency } from "$lib/strings/poForm";

  export let clickedPayeeCurrency: string = "$"
  $: selected = clickedPayeeCurrency || "$";
</script>

<label for={currency.id}>
  {currency.label}:
  <select
    class={currency.class}
    name={currency.name}
    id={currency.id}
    required
    bind:value={selected}
  >
    {#each currency.options as entry (entry.id)}
      <option
        value={entry.symbol}
      >
        {entry.abbreviation}
      </option>

    {/each}
  </select>
</label>

<style>
</style>
