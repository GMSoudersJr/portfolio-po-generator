<script lang="ts">
    import {importCryptoKey} from "$lib/cryption";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  async function handleChange(event: Event) {
    let theFile: string;
    const input = event.target as HTMLInputElement;
    let selectedFiles = input.files;
    console.log("SelectedFiles", selectedFiles)
    if ( selectedFiles && selectedFiles.length > 0 ) {
      theFile = await selectedFiles[0].text();
      const importedKey = await importCryptoKey(JSON.parse(theFile));
      dispatch('importedKey', {
        importedKey
      });
    } else {
      const importedKey = undefined;
      console.log("Clicked cancel");
      dispatch('importedKey', {
        importedKey
      })
    }
  }
</script>

<div class="import-key-container" >
  <label for="import-key">
    Import an Existing Key:
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
    grid-template-columns: min-content;
    grid-template-rows: repeat(2, min-content);
    row-gap: 0.5rem;
  }
  input[type="file"]::file-selector-button {
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
    background-color: #A29BFE;
    transition: 1s;
  }

  input[type="file"]::file-selector-button:hover {
    background-color: #81ECEC;
    border: 2px solid #00CEC9;
  }
</style>
