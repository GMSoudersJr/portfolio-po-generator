<script>
  import { bankAccountNumber } from "$lib/strings/payeeForm";
</script>

<label for={bankAccountNumber.id}>
  {bankAccountNumber.label}:
  <input
    class={bankAccountNumber.class}
    type={bankAccountNumber.type}
    name={bankAccountNumber.name}
    id={bankAccountNumber.id}
    required
  >
</label>

<style>
</style>
