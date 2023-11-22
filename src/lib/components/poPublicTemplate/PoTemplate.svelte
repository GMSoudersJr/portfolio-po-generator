<script lang="ts">
	import AdditionalNotes from "./AdditionalNotes.svelte";
  import DueBy from "./DueBy.svelte";
  import Footer from "./Footer.svelte";
	import PoNumber from "./PoNumber.svelte";
  import Title from "./Title.svelte";
  import PaymentDetailsSection from "$lib/components/poPublicTemplate/PaymentDetailsSection.svelte";
  import InternalUseSection from "$lib/components/poPublicTemplate/InternalUseSection.svelte";
  import ProductServiceDescriptionPriceSection from "$lib/components/poPublicTemplate/ProductServiceDescriptionPriceSection.svelte"
  import { decryptTheData } from "$lib/cryption";
  import { splitEncrypted } from "$lib/utils";
  import {
    dbName,
    dbVersion,
    objectStoreName
  } from "$lib/indexedDb";

	import {onMount} from "svelte";
	import { showToast, showToastInvalidKey } from "$lib/toasts";
	import { invalidKeyUsedString } from "$lib/strings/toasts";
	import ByWidget from "./ByWidget.svelte";
	import {pdfTemplateApprovedByString, pdfTemplateRequestedByString} from "$lib/strings/poTemplate";
  let cryptionKey: CryptoKey | undefined;
  let db: IDBDatabase;

  onMount(async() => {
    const cryptionKeyFileName = localStorage.getItem("cryptionKeyFileName")
    if (cryptionKeyFileName) {

      const request = window.indexedDB.open(dbName, dbVersion);
      request.onerror = (event) => {
        alert(`There was an error getting the key: ${request.error}`);
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);
        transaction.oncomplete =  (event) => {
          //alert(`Please check your work before PDF-ing It!`);
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
            async function decryptDataFromDatabase(databaseEncrypted: string) {
              const cipherAndIv = splitEncrypted(databaseEncrypted);
              const decryptedText = await decryptTheData(
                key,
                cipherAndIv.cipherArrayBuffer,
                cipherAndIv.ivArrayBuffer
              )
              return decryptedText;
            }
            if ( homeAddress ) {
              decryptedHomeAddress = await decryptDataFromDatabase(homeAddress);
            }
            if ( bankName ) {
              decryptedBankName = await decryptDataFromDatabase(bankName);
            }
            if ( bankAccountNumber ) {
              decryptedBankAccountNumber = await decryptDataFromDatabase(bankAccountNumber);
            }
            if ( bankAddress ) {
              decryptedBankAddress = await decryptDataFromDatabase(bankAddress);
            }
            if ( iban ) {
              decryptedIban = await decryptDataFromDatabase(iban);
            }
            if ( nationalIdOrBusinessRegistrationNumber ) {
              decryptedNationalIdOrBusinessRegistrationNumber =
                await decryptDataFromDatabase(nationalIdOrBusinessRegistrationNumber);
            }
            if ( routingNumber ) {
              decryptedRoutingNumber = await decryptDataFromDatabase(routingNumber);
            }
            if ( swiftCode ) {
              decryptedSwiftCode = await decryptDataFromDatabase(swiftCode);
            }
            if (
                decryptedBankName.includes("Invalid Key") ||
                decryptedBankAccountNumber.includes("Invalid Key")
              ) {
                decryptedNationalIdOrBusinessRegistrationNumber = "NOPE";
                decryptedHomeAddress = "NOPE";
                decryptedBankName = "NOPE";
                decryptedBankAccountNumber = "NOPE";
                decryptedIban = "NOPE";
                decryptedBankAddress = "NOPE";
                decryptedRoutingNumber = "NOPE";
                decryptedSwiftCode = "NOPE";
                showToastInvalidKey(
                  "error",
                  "Error",
                  invalidKeyUsedString
                );
              } else {
                showToast(
                  "success",
                  "Success",
                  "Review carefully"
                );
              }
          }
        }
      }
    }
  });

  let decryptedHomeAddress = "";
  let decryptedBankName = "";
  let decryptedBankAccountNumber = "";
  let decryptedBankAddress = "";
  let decryptedIban = "";
  let decryptedNationalIdOrBusinessRegistrationNumber = "";
  let decryptedRoutingNumber = "";
  let decryptedSwiftCode = "";

  let key: CryptoKey;

  export let poPdfData;
  const {
    approvedBy,
    createdDate,
    currency,
    dueDate,
    payeeData,
    paymentMethod,
    location,
    productsOrServicesDescriptionsAndPrices,
    poNumber,
    reportingBudgetLine,
    requestedBy,
    subtotal,
    tax,
    topicDivision,
    total
  } = poPdfData;

  const {
    bankAccountNumber,
    bankAddress,
    bankName,
    beneficiaryName: payeeName,
    homeAddress,
    iban,
    nationalIdOrBusinessRegistrationNumber,
    routingNumber,
    swiftCode,
    taxRate
  } = payeeData[0];
</script>

<div id="pdfTemplate" class="page-container">

  <section class="title">
    <Title />
  </section>

  <section class="po-number">
    <PoNumber {poNumber}/>
  </section>

  <section class="due-by">
    <DueBy {dueDate}/>
  </section>

  <section class="descriptions-prices">
    <ProductServiceDescriptionPriceSection
      {productsOrServicesDescriptionsAndPrices}
      {tax}
      {taxRate}
      {currency}
      {subtotal}
      {total}
      nationalIdOrBusinessRegistrationNumber={decryptedNationalIdOrBusinessRegistrationNumber}
    />
  </section>

  <section class="payment-details">
    <PaymentDetailsSection
      {paymentMethod}
      {payeeName}
      bankName={decryptedBankName}
      bankAccountNumber={decryptedBankAccountNumber}
      bankAddress={decryptedBankAddress}
      iban={decryptedIban}
      routingNumber={decryptedRoutingNumber}
      swiftCode={decryptedSwiftCode}
    />
  </section>

  <section class="requested-by">
    <ByWidget
      value={requestedBy}
      label={pdfTemplateRequestedByString}
    />
  </section>

  <section class="approved-by">
    <ByWidget
      value={approvedBy}
      label={pdfTemplateApprovedByString}
    />
  </section>

  <section class="internal-use">
    <InternalUseSection
      {createdDate}
      {topicDivision}
      {reportingBudgetLine}
      {location}
      {payeeName}
      homeAddress={decryptedHomeAddress}
    />
    <Footer />
  </section>

</div>

<style>
  .title {
    grid-area: title;
    padding: 45px 45px 0 45px;
  }
  .po-number {
    grid-area: poNumber;
    padding: 0 0 0 45px;
    align-self: stretch;
  }
  .due-by {
    grid-area: dueBy;
    padding: 0 45px 0 0;
    align-self: stretch;
  }
  .payment-details {
    grid-area: paymentDetails;
    padding: 0 45px 0 45px;
    align-self: stretch;
  }
  .descriptions-prices {
    grid-area: descriptionPrices;
    padding: 0 45px 0 45px;
    align-self: stretch;
  }
  .requested-by {
    grid-area: requestedBy;
    padding: 0 0 0 45px;
    align-self: stretch;
  }
  .approved-by {
    grid-area: approvedBy;
    padding: 0 45px 0 0;
    align-self: stretch;
  }
  .internal-use {
    grid-area: internalUse;
    align-self: end;
    background-color: #F1F1F1;
    display: grid;
    row-gap: 10px;
    padding-bottom: 10px;
  }
  .page-container {
    background-color: #FFF;
    width: 21cm;
    height: 29.7cm;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, min-content) 1fr;
    column-gap: 20px;
    row-gap: 3em;
    grid-template-areas:
    "title title"
    "poNumber dueBy"
    "paymentDetails paymentDetails "
    "descriptionPrices descriptionPrices"
    "requestedBy approvedBy"
    "internalUse internalUse";
  }
  @page {
    size: 21cm 29.7cm;
    margin: 30mm 45mm 30mm 45mm;
  }
</style>
