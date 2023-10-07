<script lang="ts">
  import { poSummary } from "$lib/strings/poForm";
</script>

<label for={poSummary.id}>
  {poSummary.label}:
  <input
    class={poSummary.class}
    id={poSummary.id}
    type={poSummary.type}
    name={poSummary.name}
    required
  >
</label>

<style>
</style>
