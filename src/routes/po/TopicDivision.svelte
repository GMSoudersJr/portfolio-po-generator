<script lang="ts">
  import { topicDivision } from "$lib/strings/poForm";
</script>

<label for={topicDivision.id}>
  {topicDivision.label}:
  <select
    class={topicDivision.class}
    name={topicDivision.name}
    id={topicDivision.id}
    required
  >
    {#each topicDivision.options as entry (entry.id)}
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
