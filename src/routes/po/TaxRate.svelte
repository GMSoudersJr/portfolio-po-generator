<script>
  import { taxRate } from "$lib/strings/poForm";
</script>

<label for={taxRate.id}>
  {taxRate.label}:
  <input
    class={taxRate.class}
    id={taxRate.id}
    type={taxRate.type}
    name={taxRate.name}
    required
  >
</label>

<style>
</style>
