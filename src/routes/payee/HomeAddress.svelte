<script>
  import { homeAddress } from "$lib/strings/payeeForm";
</script>

<label for={homeAddress.id}>
  {homeAddress.label}:
  {#each homeAddress.options as entry (entry.id)}
    <input
      type={homeAddress.type}
      name={homeAddress.name}
      id={homeAddress.id}
      class={homeAddress.class}
    >
  {/each}
  </label>

<style>
</style>

