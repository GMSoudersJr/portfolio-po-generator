<script lang="ts">
  import { beneficiaryName } from "$lib/strings/payeeForm";

  export let value: string;
</script>

<label for={beneficiaryName.id}>
  {beneficiaryName.label}:
  <input
    class={beneficiaryName.class}
    id={beneficiaryName.id}
    type="text"
    name={beneficiaryName.name}
    bind:value={value}
    required
    autocomplete="name"
  >
</label>

<style>
</style>

