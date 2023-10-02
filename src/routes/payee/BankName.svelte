<script>
	import {bankName} from "$lib/strings/payeeForm";
</script>

<label for={bankName.id}>
  {bankName.label}:
  <input
    class={bankName.class}
    type={bankName.type}
    name={bankName.name}
    id={bankName.id}
    required
  >
</label>

<style>
</style>

