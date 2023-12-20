<script lang="ts">
  import { error } from '$lib/strings/alerts'

  import {
    openDB,
    dbName,
    dbVersion,
    objectStoreName
  } from "$lib/indexedDb";

  import { onMount } from "svelte";
  import { changeToPascalCase, formatPoNumberDateString, getInitials } from "$lib/utils";
	import type { PageData, ActionData } from "./$types";
	import PoForm from "./PoForm.svelte";
	import type {PoFormPoNumber} from "$lib/classes";
	import {dueDate, reportBudgetLine, requestedBy, topicDivision} from "$lib/strings/poForm";
  import { showToast } from '$lib/toasts';
	import { crytptionTitle, poFormCreateString } from '$lib/strings/toasts';
	import {poFormHeading} from '$lib/strings/homepage';
  export let data: PageData;
  export let form: ActionData;

  let cryptionKey: CryptoKey | undefined;
  let db: IDBDatabase;

  $: ({ payees } = data);

  $: clickedPayeeName = "";
  $: clickedPayeeTaxRate = 0;
  $: clickedPayee_id = "";
  $: clickedPayeeCurrency = "";
  $: clickedPayeeTopicDivision = "";
  $: clickedPayeeReportingBudgetLine = "";

  const poFormPoNumber: PoFormPoNumber = {
    dueDate: formatPoNumberDateString(dueDate.value),
    summary: "",
    topicDivision: changeToPascalCase(topicDivision.options.at(0)?.value),
    requesterInitials: getInitials(requestedBy.options.at(0)?.value)
  };

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
        alert(`${error}
              \nCould not connect to IndexedDB: \n{request.error}`);
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);

        transaction.oncomplete =  (event) => {
          showToast(
            "success",
            poFormHeading,
            poFormCreateString
          );
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

</script>

<div class="page-grid-container">
  {#if importedCryptionKeyFileName && key}
  <div class="po-form">
    <PoForm
      {clickedPayeeName}
      {clickedPayee_id}
      {clickedPayeeTaxRate}
      {clickedPayeeCurrency}
      {clickedPayeeTopicDivision}
      {clickedPayeeReportingBudgetLine}
      {poFormPoNumber}
      {form}
      {payees}
    />
  </div>
  {/if}
</div>

<style>
  .page-grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "poForm";
    column-gap: 1rem;
  }
  .po-form {
    grid-area: poForm;
    padding: 2rem;
  }

  @media screen and (min-width: 40em) {
    .page-grid-container {
      grid-template-columns: 1fr 600px 1fr;
      grid-template-rows: auto;
      grid-template-areas:
      ". poForm .";
    }
  }
</style>
