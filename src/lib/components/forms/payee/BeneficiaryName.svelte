<script lang="ts">
  import { beneficiaryName } from "$lib/strings/payeeForm";

  export let value: string;
  export let disabled: boolean;
</script>

<label for={beneficiaryName.id}>
  {beneficiaryName.label}:
</label>
  <input
    class={beneficiaryName.class}
    id={beneficiaryName.id}
    type="text"
    name={beneficiaryName.name}
    bind:value={value}
    required
    autocomplete="name"
    {disabled}
  >

<style>
</style>
