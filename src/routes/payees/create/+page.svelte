<script lang="ts">
	import {onMount} from "svelte";
  import type { ActionData, PageData} from "./$types";
	import GenerateCryptionButton from "./GenerateCryptionButton.svelte";
	import ImportKey from "./ImportKey.svelte";
  import PayeeForm from "./PayeeForm.svelte";

  let cryptionKey: CryptoKey | undefined;
  let db: IDBDatabase;
  const dbName = "CryptionKey";
  const dbVersion = 1;
  const objectStoreName = "Encryption_Decryption_Key";

  export let data: PageData;
  export let form: ActionData;
  let key: CryptoKey;
  let importedCryptionKeyFileName: string | null;

  onMount(async() => {
    const cryptionKeyFileName = localStorage.getItem("cryptionKeyFileName");
    if (cryptionKeyFileName) {
      importedCryptionKeyFileName = cryptionKeyFileName;

      const request = window.indexedDB.open(dbName, dbVersion);
      request.onerror = (event) => {
        alert(`There was an error getting the key: ${request.error}`);
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);

        transaction.oncomplete =  (event) => {
          alert(`Reusing the same key`);
        }
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.get(cryptionKeyFileName);

        request.onerror = (event) => {
          alert(`Error getting ${cryptionKeyFileName}'s key.`)
        }

        request.onsuccess = async (event) => {
          const result = await (event.target as IDBRequest).result;
          cryptionKey = await result.key;
          if ( cryptionKey ) {
            key = cryptionKey
          }
        }
      }
    }  
  });

  async function handleImportKey(event: CustomEvent) {
    key = event.detail.importedKey;
    importedCryptionKeyFileName = event.detail.fileName;
  }
</script>

<main class="page-container">
  <div class="key-container">
    <GenerateCryptionButton />
    <ImportKey
      on:importedKey={handleImportKey}
    />
  </div>
  {#if importedCryptionKeyFileName && key}
  <div class="form">
    {#if form?.success}
    <p class="form-success">{form.message}</p>
    {/if}
    <PayeeForm {key}/>
  </div>
  {/if}
</main>

<style>
  .key-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, min-content);
    row-gap: 1rem;
    grid-area: key;
    padding: 2rem;
  }
  .page-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(400px, 1fr) 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "key form .";
  }
  .form {
    grid-area: form;
    padding: 2rem 0;
  }
  .form-success {
    color: #04AA6D;
    text-align: center;
    padding-bottom: 0.5rem;
  }
</style>
