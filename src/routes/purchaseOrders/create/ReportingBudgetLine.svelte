<script lang="ts">
  import { reportBudgetLine } from "$lib/strings/poForm";

  export let clickedPayeeReportingBudgetLine: string;
  $: selected = clickedPayeeReportingBudgetLine ||
    reportBudgetLine.options.at(0)?.value;
</script>

<label for={reportBudgetLine.id}>
  {reportBudgetLine.label}:
  <select
    class={reportBudgetLine.class}
    name={reportBudgetLine.name}
    id={reportBudgetLine.id}
    required
    bind:value={selected}
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
