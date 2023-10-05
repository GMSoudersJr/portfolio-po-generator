<script lang="ts">
  import { total } from "$lib/strings/poForm";

  export let totalActual: number;
  $: value = totalActual;
</script>

<label for={total.id}>
  {total.label}:
  <input
    class={total.class}
    id={total.id}
    type="number"
    name={total.name}
    required
    bind:value={value}
  >
</label>
