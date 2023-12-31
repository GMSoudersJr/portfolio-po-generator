<script lang="ts">
  import {
    openDB,
    dbName,
    dbVersion,
    objectStoreName
  } from "$lib/indexedDb";
  import { showToast } from '$lib/toasts';

	import {onMount} from "svelte";
  import type { ActionData } from "./$types";
  import PayeeForm from "./PayeeForm.svelte";
	import {crytptionTitle} from "$lib/strings/toasts";

  let cryptionKey: CryptoKey | undefined;
  let db: IDBDatabase;

  export let form: ActionData;
  let key: CryptoKey;
  let importedCryptionKeyFileName: string | null;

  onMount(async() => {
    await openDB();
    const cryptionKeyFileName = localStorage.getItem("cryptionKeyFileName");
    const keyDialog = document.getElementById("key-dialog") as HTMLDialogElement;
    if (cryptionKeyFileName) {
      importedCryptionKeyFileName = cryptionKeyFileName;

      const request = window.indexedDB.open(dbName, dbVersion);
      request.onerror = (event) => {
        showToast(
          "error",
          "IndexedDB",
          `Could not connect to IndexedDB:\n${request.error}`
        );
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);

        transaction.oncomplete =  (event) => {
          console.log("Create Payee IndexedDB transaction complete.")
        }
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.get(cryptionKeyFileName);

        request.onerror = (event) => {
          if (keyDialog) {
            keyDialog.showModal();
          }
        }

        request.onsuccess = async (event) => {
          const result = await (event.target as IDBRequest).result;
          if ( result ) {
            cryptionKey = await result.key;
            if ( cryptionKey ) {
              key = cryptionKey
              keyDialog.close();
              showToast( "info", crytptionTitle, `Will use ${cryptionKeyFileName}`);
            }
          } else {
            if (keyDialog) {
              keyDialog.showModal();
            }
          }
        }
      }
    } else {
      if (keyDialog) {
        keyDialog.showModal();
      }
    }
  });

  const payeeData = undefined;
</script>

<main class="page-container">
  {#if importedCryptionKeyFileName && key}
  <div class="form">
    {#if form?.success}
    <p class="form-success">{form.message}</p>
    {/if}
    <PayeeForm
      {payeeData}
      {key}
    />
  </div>
  {/if}
</main>

<style>
  .page-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: 1rem;
    grid-template-areas:
    ". form .";
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

  @media screen and (min-width: 40em) {
    .page-container {
      grid-template-columns: 1fr 400px 1fr;
    }
  }
</style>
