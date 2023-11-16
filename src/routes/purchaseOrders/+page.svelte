<script lang="ts">
	import GotoFormButton from "$lib/components/GotoFormButton.svelte";
  import type { PageData } from "./$types";
  import PurchaseOrdersTable from "./PurchaseOrdersTable.svelte";
  import {
    dbName,
    dbVersion,
    objectStoreName,
    openDB,
  } from "$lib/indexedDb";
  import {
    error,
    success,
  } from "$lib/strings/alerts";
  import { onMount } from "svelte";
  import { showToast } from "$lib/utils";
  import Toast from "$lib/components/Toast.svelte";
	import {crytptionTitle} from "$lib/strings/toasts";

  let db: IDBDatabase;
  let cryptionKey: CryptoKey | undefined;
  let key: CryptoKey;
  let cryptionKeyFileName: IDBValidKey;

  onMount(async() => {
    cryptionKeyFileName = localStorage.getItem("cryptionKeyFileName") as IDBValidKey;
    const keyDialog = document.getElementById("key-dialog") as HTMLDialogElement;
    const invalidKeyDialog = document.getElementById("invalid-key-dialog") as HTMLDialogElement;
    if ( invalidKeyDialog ) {
      invalidKeyDialog.close();
    }
    if (cryptionKeyFileName) {
      await openDB();
      const request = window.indexedDB.open(dbName, dbVersion);
      request.onerror = (event) => {
        showToast(
          "error",
          "Error",
          `Could not connect to IndexedDB: \n${request.error}`
        );
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);

        transaction.oncomplete =  (event) => {
          console.log("Transaction complete on Payee Page.");
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
              key = cryptionKey;
              keyDialog.close();
              showToast(
                "info",
                crytptionTitle,
                `Will use ${cryptionKeyFileName}`
              );
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

  const pathUrl = '/purchaseOrders/create';
  export let data: PageData;
  console.log(data);
  $: ({ overviewPos } = data)
</script>

<div class="page-container">
  <div class="purchase-order-header">
    <h2>
      Purchase Orders
    </h2>
    <GotoFormButton {pathUrl}/>
  </div>
  {#if overviewPos && overviewPos.length > 0}
  <main class="pos-overview">
    {#await overviewPos}
      <p>Loading...</p>
    {:then overviewPos} 
      <PurchaseOrdersTable {overviewPos} />
    {/await}
  </main>
  {:else}
    <h3 class="no-pos">
      No POs yet
    </h3>
  {/if}
  <Toast />
</div>

<style>
  .no-pos {
    text-align: center;
  }
  .page-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    row-gap: 1em;
    padding: 0 1rem;
  }
  .purchase-order-header {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: min-content;
    column-gap: 0.5rem;
    align-items: center;
    justify-self: center;
  }
  .pos-overview {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    justify-content: left;
    overflow-x: scroll;
  }
</style>


