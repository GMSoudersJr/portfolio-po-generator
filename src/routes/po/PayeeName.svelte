<script>
  import { payeeName } from "$lib/strings/poForm";
</script>

<label for={payeeName.id}>
  {payeeName.label}:
  <input
    class={payeeName.class}
    id={payeeName.id}
    type={payeeName.type}
    name={payeeName.name}
    required
  >
</label>

<style>
</style>
