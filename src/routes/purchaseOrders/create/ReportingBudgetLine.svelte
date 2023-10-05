<script lang="ts">
  import { reportBudgetLine } from "$lib/strings/poForm";
</script>

<label for={reportBudgetLine.id}>
  {reportBudgetLine.label}:
  <select
    class={reportBudgetLine.class}
    name={reportBudgetLine.name}
    id={reportBudgetLine.id}
    required
  >
    {#each reportBudgetLine.options as entry (entry.id)}
      <option
        value={entry.value}
      >
        {entry.text}
      </option>

    {/each}
  </select>
</label>

<style>
</style>
