<script lang="ts">
	import { goto, invalidateAll } from "$app/navigation";

  import { importCryptoKey } from "$lib/cryption";
  import { openDB, addToDb } from "$lib/indexedDb";
  import { createEventDispatcher } from "svelte";
  import { showToast } from "$lib/toasts";
  import Toast from "$lib/components/Toast.svelte";
	import {cryptionKeyTitle} from "$lib/strings/toasts";

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
      showToast(
        "success",
        cryptionKeyTitle,
        `Imported: ${fileName}`
      )
      dispatch('importedKey', {
        importedKey,
        fileName
      });
      await openDB();
      await addToDb(theFile);

      let keyDialog =
        document.getElementById("key-dialog") as HTMLDialogElement;
      if (keyDialog) {
        keyDialog.close();
        if ( keyDialog.baseURI.includes("payees") ) {
          await goto('/payees/', {invalidateAll: true});
        } else if ( keyDialog.baseURI.includes("purchaseOrders") ) {
          await goto('/purchaseOrders/', {invalidateAll: true});
        } else {
          await goto(keyDialog.baseURI, {invalidateAll: true});
        }
      }

      let invalidKeyDialog =
        document.getElementById("invalid-key-dialog") as HTMLDialogElement;
      if (invalidKeyDialog) {
        invalidKeyDialog.close();
        if ( invalidKeyDialog.baseURI.includes("payees") ) {
          await goto('/payees/', {invalidateAll: true});
        } else if ( invalidKeyDialog.baseURI.includes("purcahseOrders") ) {
          await goto('/purchaseOrders/', {invalidateAll: true});
        } else {
          await goto(invalidKeyDialog.baseURI, {invalidateAll: true});
        }
      }
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
    📤 Import an Existing Cryption Key 🔐
  </label>
  <input
    type="file"
    accept=".jwk"
    name="importedKey"
    id="import-key"
    on:change={handleChange}
  >
    <Toast />
</div>

<style>
  label {
    font-size: 1rem;
  }
  .import-key-container {
    width: 303px;
    background-color: #f1f1f1;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: repeat(2, min-content);
    row-gap: 0.6rem;
    border-radius: 1px;
    padding: 6px 12px;
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
    cursor: pointer;
  }
</style>
