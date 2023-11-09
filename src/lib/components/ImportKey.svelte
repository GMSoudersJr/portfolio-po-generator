<script lang="ts">
    import {importCryptoKey} from "$lib/cryption";
    import { openDB, addToDb } from "$lib/indexedDb";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  async function handleChange(event: Event) {
    let theFile: File;
    const input = event.target as HTMLInputElement;
    let selectedFiles = input.files;
    if ( selectedFiles && selectedFiles.length > 0 ) {
      theFile = selectedFiles[0];
      const fileText = await selectedFiles[0].text();
      const fileName = theFile.name;
      localStorage.setItem("cryptionKeyFileName", fileName);
      const importedKey = await importCryptoKey(JSON.parse(fileText));
      alert(`Success ✔
            \nImported: ${fileName}`);
      dispatch('importedKey', {
        importedKey,
        fileName
      });
      await openDB();
      await addToDb(theFile);
    } else {
      const importedKey = undefined;
      localStorage.clear();
      dispatch('importedKey', {
        importedKey
      });
    }
  }
</script>

<div class="import-key-container" >
  <label for="import-key">
    📤 an Existing Cryption Key 🔐:
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
  label {
    font-size: 1rem;
  }
  .import-key-container {
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: repeat(2, min-content);
    row-gap: 0.5rem;
  }
  input[type="file"]::file-selector-button {
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
    background-color: #259259;
    color: #fff;
    transition: 1s;
  }

  input[type="file"]::file-selector-button:hover {
    background-color: #39FF14;
    border: 2px solid #00CEC9;
  }
</style>
