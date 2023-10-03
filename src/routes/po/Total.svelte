<script>
  import { total } from "$lib/strings/poForm";
</script>

<label for={total.id}>
  {total.label}:
  <input
    class={total.class}
    id={total.id}
    type={total.type}
    name={total.name}
    required
  >
</label>
