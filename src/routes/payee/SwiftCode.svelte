<script>
  import { swiftCode } from "$lib/strings/payeeForm";
</script>

<label for={swiftCode.id}>
  {swiftCode.label}:
  {#each swiftCode.options as entry (entry.id)}
    <input
      class={swiftCode.class}
      type={swiftCode.type}
      name={entry.name}
      id={swiftCode.id}
    >
  {/each}
</label>

<style>
</style>
