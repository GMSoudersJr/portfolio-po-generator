<script lang="ts">
  import PayeeCards from "../purchaseOrders/create/PayeeCards.svelte";
  import type { PageData } from "./$types";
	import {goto} from "$app/navigation";
  import GotoFormButton from "$lib/components/GotoFormButton.svelte";
	import {onMount} from "svelte";
  import {
    openDB,
    dbName,
    dbVersion,
    objectStoreName
  } from "$lib/indexedDb";
	import Toast from '$lib/components/Toast.svelte';
  import { showToast } from "$lib/toasts";

  let db: IDBDatabase;
  let cryptionKey: CryptoKey | undefined;
  let key: CryptoKey;
  let cryptionKeyFileName: IDBValidKey;

  async function handleClickedPayee(event: CustomEvent) {
    const clickedPayeePerformance = performance.measure('clickedPayeePerformance');
    console.log(clickedPayeePerformance);
    const payee_id = event.detail.payee._id;
    if ( clickedPayeePerformance.duration > 30_000 ) {
      showToast('warning','Searching', 'Network connections may slow response.')
    }
    await goto(`/payees/update/${payee_id}`);
  }

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
          "IndexedDB",
          `Could not connect to IndexedDB:\n${request.error}`
        );
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);

        transaction.oncomplete =  (event) => {
          console.log("Payees page IndexedDB transaction complete.")
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
              console.log(`Will use ${cryptionKeyFileName}`)
              //showToast( "info", crytptionTitle, `Will use ${cryptionKeyFileName}`);
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

  const pathUrl = '/payees/create';
  export let data: PageData;
  $: ({payees} = data);
</script>

<main class="page-container">
  <div class="available-payees-title">
    <h2>
      Payees
    </h2>
    <GotoFormButton {pathUrl}/>
  </div>
  <section class="available-payees-section">
  {#if payees && payees.length > 0}
    <PayeeCards
      on:clickedPayee={handleClickedPayee}
      {payees}
    />
  {:else}
    <h3 class="no-payees">
      Add Payees to see them here
    </h3>
  {/if}
  </section>
  <Toast />
</main>

<style>
  .page-container {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 800px) 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
    ". title ."
    ". payees .";
    row-gap: 1em;
  }
  .no-payees {
    grid-area: payees;
    text-align: center;
  }
  .available-payees-section {
    grid-area: payees;
  }
  .available-payees-title {
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: min-content;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    grid-area: title;
  }
</style>

