<script lang="ts">
  import { payeeTypeAndTax } from "$lib/strings/payeeForm"

  export let value: string;
  export let disabled: boolean;
  $: selected = value || payeeTypeAndTax.options.at(0)?.value;
</script>

<label for={payeeTypeAndTax.id}>
  {payeeTypeAndTax.label}:
  <select
    class={payeeTypeAndTax.class}
    name={payeeTypeAndTax.name}
    id={payeeTypeAndTax.id}
    bind:value={selected}
    required
    {disabled}
  >
    {#each payeeTypeAndTax.options as payeeType (payeeType.id)}
      <option
        value={payeeType.value}
      >
        {payeeType.text} - Tax Rate {payeeType.taxRate * 100}%
      </option>
    {/each}
  </select>
</label>

<style>
</style>

