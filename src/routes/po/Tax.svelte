<script>
  import { tax } from "$lib/strings/poForm";
</script>

<label for={tax.id}>
  {tax.label}:
  <input
    class={tax.class}
    id={tax.id}
    type={tax.type}
    name={tax.name}
    required
  >
</label>

<style>
</style>
