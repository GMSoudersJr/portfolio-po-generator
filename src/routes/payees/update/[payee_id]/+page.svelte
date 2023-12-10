<script lang="ts">
  import PayeeForm from "../../create/PayeeForm.svelte";
  import type { PageData } from "./$types";
  import {
    openDB,
    dbName,
    dbVersion,
    objectStoreName
  } from "$lib/indexedDb";

	import {onMount} from "svelte";
  import type { ActionData } from "./$types";
	import KeyDialog from "$lib/components/KeyDialog.svelte";
  import { showToast } from "$lib/toasts";

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
          console.log("Payee Update transaction complete.")
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
              console.log(`Payee Update Page using ${cryptionKeyFileName}`)
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

  export let data: PageData;
  const payeeData = data.payeeData;
  $: purpose = data.purpose;
  console.log(form);
</script>

<main class="page-container">
  {#if importedCryptionKeyFileName && key}
  <div class="form">
    {#if form?.success}
    <p class="form-success">{form.message}</p>
    {/if}
    <PayeeForm
      {purpose}
      {payeeData}
      {key}
    />
  </div>
  {/if}
  <KeyDialog />
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
