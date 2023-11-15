<script lang="ts">
  import {
    error,
    success,
    transactionComplete,
  } from '$lib/strings/alerts'

  import {
    openDB,
    dbName,
    dbVersion,
    objectStoreName
  } from "$lib/indexedDb";

  import { onMount } from "svelte";
  import { changeToPascalCase, formatPoNumberDateString, getInitials } from "$lib/utils";
	import type { PageData, ActionData } from "./$types";
	import PayeeCards from "./PayeeCards.svelte";
	import PoForm from "./PoForm.svelte";
	import type {PoFormPoNumber} from "$lib/classes";
	import {dueDate, reportBudgetLine, requestedBy, topicDivision} from "$lib/strings/poForm";
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

  function handleSearch(event: CustomEvent) {
    const query = event.detail.query.toLowerCase();
    payees?.forEach(payee => {
      const shouldBeShown = payee.beneficiaryName.toLowerCase().includes(query);
      payee.shouldBeShown = shouldBeShown;
    });
    payees = payees;
  }

  function handleClickedPayee(event: CustomEvent) {
    const payeeName = event.detail.payee.beneficiaryName;
    const _id = event.detail.payee._id;
    const taxRate = event.detail.payee.taxRate;
    const currency = event.detail.payee.currency;
    const payeeTopicDivision = event.detail.payee.topicDivision;
    const payeeReportingBudgetLine = event.detail.payee.reportingBudgetLine;
    clickedPayeeName = payeeName;
    clickedPayee_id = _id;
    clickedPayeeTaxRate = taxRate;
    clickedPayeeCurrency = currency;
    clickedPayeeTopicDivision = payeeTopicDivision;
    clickedPayeeReportingBudgetLine = payeeReportingBudgetLine;

    if (!payeeReportingBudgetLine) {
      clickedPayeeReportingBudgetLine = reportBudgetLine.options.at(0)?.value!;
    }

    if (payeeTopicDivision) {
      poFormPoNumber.topicDivision = changeToPascalCase(payeeTopicDivision);
      clickedPayeeTopicDivision = payeeTopicDivision;
    } else {
      poFormPoNumber.topicDivision =
        changeToPascalCase(topicDivision.options.at(0)?.value);
      clickedPayeeTopicDivision = topicDivision.options.at(0)?.value!;
    }

    payees?.forEach(payee => {
    const shouldBeShown = payee.beneficiaryName.toLowerCase().includes(payeeName.toLowerCase());
      payee.shouldBeShown = shouldBeShown;
    });
    payees = payees;
  }

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
          alert(transactionComplete);
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
              alert(`${success}
                    \nUsing previous key: ${cryptionKeyFileName}`);
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
      on:searching={handleSearch}
      {clickedPayeeName}
      {clickedPayee_id}
      {clickedPayeeTaxRate}
      {clickedPayeeCurrency}
      {clickedPayeeTopicDivision}
      {clickedPayeeReportingBudgetLine}
      {poFormPoNumber}
      {form}
    />
  </div>
  <div class="available-payees">
    <h6 class="available-payees-header">
      Available Payees
    </h6>
    {#if payees && payees.length > 0}
    <PayeeCards
      on:clickedPayee={handleClickedPayee}
      {payees}
    />
    {:else}
    <p class="no-payees">
      No payees yet
    </p>
    {/if}
  </div>
  {/if}
</div>

<style>
  .available-payees-header {
    font-size: 1rem;
    font-weight: 400;
    line-height: 10px;
  }
  .key-container {
    justify-self: center;
    padding-top: 2rem;
    grid-area: key;
  }
  .page-grid-container {
    display: grid;
    grid-template-columns: 1fr minmax(400px, 1fr) 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "key poForm availablePayees";
    column-gap: 1rem;
  }
  .available-payees {
    grid-area: availablePayees;
  }
  .po-form {
    grid-area: poForm;
    padding: 2rem 0;
  }
  .available-payees-header,
  .no-payees {
    padding-top: 2rem;
    padding-left: 1rem;
  }
</style>
