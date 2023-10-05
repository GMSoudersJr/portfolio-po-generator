<script>
  import { SwiftCodeOrIbanNumber } from "$lib/strings/payeeForm";
</script>

<label for={SwiftCodeOrIbanNumber.id}>
  {SwiftCodeOrIbanNumber.label}:
  <input
    class={SwiftCodeOrIbanNumber.class}
    type={SwiftCodeOrIbanNumber.type}
    name={SwiftCodeOrIbanNumber.name}
    id={SwiftCodeOrIbanNumber.id}
  >
</label>

<style>
</style>
