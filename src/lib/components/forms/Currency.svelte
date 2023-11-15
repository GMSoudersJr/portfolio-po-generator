<script lang="ts">
  import { currency } from "$lib/strings/poForm";

  export let clickedPayeeCurrency: string = currency.options[0].value;
  export let value: string;
  export let disabled: boolean;
  $: selected = value || clickedPayeeCurrency || "krw";
</script>

<label for={currency.id}>
  {currency.label}:
  <select
    class={currency.class}
    name={currency.name}
    id={currency.id}
    required
    bind:value={selected}
    {disabled}
  >
    {#each currency.options as entry (entry.id)}
      <option
        value={entry.value}
      >
        {entry.abbreviation} - {entry.symbol}
      </option>
    {/each}
  </select>
</label>

<style>
</style>
