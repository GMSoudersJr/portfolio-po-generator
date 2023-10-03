<script lang="ts">
  import { poNumber } from "$lib/strings/poForm";
</script>

<label for={poNumber.id}>
  {poNumber.label}:
  <input
    class={poNumber.class}
    id={poNumber.id}
    type={poNumber.type}
    name={poNumber.name}
    required
  >
</label>

<style>
</style>
