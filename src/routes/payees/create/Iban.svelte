<script>
  import { iban } from "$lib/strings/payeeForm";
</script>

<label for={iban.id}>
  {iban.label}:
  <input
    class={iban.class}
    type={iban.type}
    name={iban.name}
    id={iban.id}
  >
</label>

<style>
</style>

