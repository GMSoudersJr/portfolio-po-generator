<script>
  import { createdDate } from "$lib/strings/poForm";
</script>

<label for={createdDate.id}>
  {createdDate.label}:
  <input
    class={createdDate.class}
    type={createdDate.type}
    name={createdDate.name}
    id={createdDate.id}
    min={createdDate.min}
    value={createdDate.value}
    required
  >
</label>

<style>
</style>
