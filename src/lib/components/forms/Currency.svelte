<script lang="ts">
  import { currency } from "$lib/strings/poForm";

  export let clickedPayeeCurrency: string = "KRW"
  $: selected = clickedPayeeCurrency || "USD";
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
        value={entry.value}
      >
        {entry.abbreviation}
      </option>

    {/each}
  </select>
</label>

<style>
</style>
