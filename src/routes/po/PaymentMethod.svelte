<script lang="ts">
  import { paymentMethod } from "$lib/strings/poForm";
</script>

<label for={paymentMethod.id}>
  {paymentMethod.label}:
  <select
    class={paymentMethod.class}
    name={paymentMethod.name}
    id={paymentMethod.id}
    required
  >
    {#each paymentMethod.options as entry (entry.id)}
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

