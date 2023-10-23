<script lang="ts">
    import {importCryptoKey} from "$lib/cryption";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  async function handleChange(event: Event) {
    let theFile: string;
    const input = event.target as HTMLInputElement;
    let selectedFiles = input.files;
    if ( selectedFiles ) {
      theFile = await selectedFiles[0].text();
      const importedKey = await importCryptoKey(JSON.parse(theFile));
      dispatch('importedKey', {
        importedKey
      });
    }
  }
</script>

<div class="import-key-container" >
  <label for="import-key">
    Import your Key:
  </label>
  <input
    type="file"
    accept=".jwk"
    name="importedKey"
    id="import-key"
    on:change={handleChange}
  >
</div>



<style>
  .import-key-container {
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: repeat(3, auto);
    row-gap: 0.5rem;
  }
</style>

