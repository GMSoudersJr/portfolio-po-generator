<script>
  import { nationaIdOrBusinessRegistration } from "$lib/strings/payeeForm";
</script>

<label for={nationaIdOrBusinessRegistration.id}>
  {nationaIdOrBusinessRegistration.label}:
  <input
    class={nationaIdOrBusinessRegistration.class}
    type={nationaIdOrBusinessRegistration.type}
    name={nationaIdOrBusinessRegistration.name}
    id={nationaIdOrBusinessRegistration.id}
  >
</label>

<style>
</style>
