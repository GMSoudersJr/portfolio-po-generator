<script lang="ts">
  import { approvedBy } from "$lib/strings/poForm";
</script>

<label for={approvedBy.id}>
  {approvedBy.label}<span>*</span>:
  <select
    class={approvedBy.class}
    name={approvedBy.name}
    id={approvedBy.id}
    required
  >
    {#each approvedBy.options as entry (entry.id)}
      <option
        value={entry.value}
      >
        {entry.text}
      </option>

    {/each}
  </select>
</label>

<style>
  span {
    color: var(--warningRed);
  }
</style>

