<script>
  import { bankAddress } from "$lib/strings/payeeForm";
</script>

<label for={bankAddress.id}>
  {bankAddress.label}:
  {#each bankAddress.options as entry (entry.id)}
    <input
      type={bankAddress.type}
      name={bankAddress.name}
      id={bankAddress.id}
      class={bankAddress.class}
    >
  {/each}
  </label>

<style>
</style>
