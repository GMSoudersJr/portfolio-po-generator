<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { cryptionKeyFileName } from "$lib/stores";

  const dispatch = createEventDispatcher();

  export let fileName: string;

  function handleClick() {
    cryptionKeyFileName.set(fileName);
  }
</script>

<button
  type="button"
  class="key-card"
  on:click={handleClick}
  value={fileName}
>
  {fileName}
</button>

<style>
  button {
    padding: 12px 15px;
  }
</style>
