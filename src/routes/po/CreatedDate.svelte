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
    min={dueDate.min}
    value={dueDate.value}
    required
  >
</label>

<style>
</style>
