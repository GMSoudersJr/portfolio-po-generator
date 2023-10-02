<script>
  import { dueDate } from "$lib/strings/poForm";
</script>

<label for={dueDate.id}>
  {dueDate.label}:
  <input
    class={dueDate.class}
    type={dueDate.type}
    name={dueDate.name}
    id={dueDate.id}
    min={dueDate.min}
    value={dueDate.value}
    required
  >
</label>

<style>
</style>
