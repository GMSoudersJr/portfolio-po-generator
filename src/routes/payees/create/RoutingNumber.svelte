<script>
  import { routingNumber } from "$lib/strings/payeeForm";
</script>

<label for={routingNumber.id}>
  {routingNumber.label}:
  {#each routingNumber.options as entry (entry.id)}
  <input
    class={routingNumber.class}
    type={routingNumber.type}
    name={entry.name}
    id={routingNumber.id}
  >
  {/each}
</label>

<style>
</style>
