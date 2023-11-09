<script lang="ts">
  import {
    error,
    ifTheyHaveKey,
    ifTheyNeedNewKey,
    noFileName,
    step1,
    step2,
    success,
    transactionComplete,
    warning,
  } from '$lib/strings/alerts'

  import {
    openDB,
    dbName,
    dbVersion,
    objectStoreName
  } from "$lib/indexedDb";
  import KeyHandler from "$lib/components/KeyHandler.svelte";

	import {onMount} from "svelte";
  import type { ActionData } from "./$types";
  import PayeeForm from "./PayeeForm.svelte";

  let cryptionKey: CryptoKey | undefined;
  let db: IDBDatabase;

  export let form: ActionData;
  let key: CryptoKey;
  let importedCryptionKeyFileName: string | null;

  onMount(async() => {
    await openDB();
    const cryptionKeyFileName = localStorage.getItem("cryptionKeyFileName");
    if (cryptionKeyFileName) {
      importedCryptionKeyFileName = cryptionKeyFileName;

      const request = window.indexedDB.open(dbName, dbVersion);
      request.onerror = (event) => {
        alert(`${error}
              \nCould not connect to IndexedDB: \n{request.error}`);
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);

        transaction.oncomplete =  (event) => {
          alert(transactionComplete);
        }
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.get(cryptionKeyFileName);

        request.onerror = (event) => {
          console.log(request);
          alert(`${error}
                \n Could not get ${cryptionKeyFileName}'s key.
                \n${ifTheyHaveKey}\n${ifTheyNeedNewKey}
                \n${step1}
                \n${step2}`);
        }

        request.onsuccess = async (event) => {
          const result = await (event.target as IDBRequest).result;
          if ( result ) {
            cryptionKey = await result.key;
            if ( cryptionKey ) {
              key = cryptionKey
              alert(`${success}
                    \nUsing previous key: ${cryptionKeyFileName}`);
            }
          } else {
            alert(`${warning}
               \n${cryptionKeyFileName} was not found in the IndexedDB.
               \nDatabase: ${db.name} \nVersion: ${db.version}
                \n${ifTheyHaveKey}\n${ifTheyNeedNewKey}
               \n${step1}
               \n${step2}`);
          }
        }
      }
    } else {
      alert(`${warning}
         \n${noFileName}
                \n${ifTheyHaveKey}\n${ifTheyNeedNewKey}
         \n${step1}
         \n${step2}`);
    }
  });

  async function handleImportKey(event: CustomEvent) {
    key = event.detail.importedKey;
    importedCryptionKeyFileName = event.detail.fileName;
  }
</script>

<main class="page-container">
  <div class="key-container">
    {#if !importedCryptionKeyFileName || !key}
    <KeyHandler
      on:importedKey={handleImportKey}
    />
    {/if}
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
    justify-self: center;
    padding-top: 2rem;
    grid-area: key;
  }
  .page-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(400px, 1fr) 1fr;
    grid-template-rows: auto;
    column-gap: 1rem;
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
