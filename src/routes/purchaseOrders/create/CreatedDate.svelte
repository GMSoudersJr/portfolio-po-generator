<script>
  import { createdDate } from "$lib/strings/poForm";
</script>

<label for={createdDate.id}>
  {createdDate.label}<span>*</span>:
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
  span {
    color: var(--warningRed);
  }
</style>
