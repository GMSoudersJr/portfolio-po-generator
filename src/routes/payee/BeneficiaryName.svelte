<script>
  import { beneficiaryName } from "$lib/strings/payeeForm";
</script>

<label for={beneficiaryName.id}>
  {beneficiaryName.label}:
  <input
    class={beneficiaryName.class}
    id={beneficiaryName.id}
    type={beneficiaryName.type}
    name={beneficiaryName.name}
  >
</label>

<style>
</style>

