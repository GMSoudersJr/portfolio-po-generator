<script>
  import { payeeTypeAndTax } from "$lib/strings/payeeForm"
</script>

<label for={payeeTypeAndTax.id}>
  {payeeTypeAndTax.label}:
  <select
    class={payeeTypeAndTax.class}
    name={payeeTypeAndTax.name}
    id={payeeTypeAndTax.id}
    required
  >
    {#each payeeTypeAndTax.options as payeeType (payeeType.id)}
      <option
        value={payeeType.value}
      >
        {payeeType.text}
      </option>
    {/each}
  </select>
</label>

<style>
</style>

