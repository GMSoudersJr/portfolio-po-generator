<script lang="ts">
  import {
    pdfTemplateSection1String,
    pdfTemplateSection2String,
    pdfTemplateSection3String
  } from "$lib/strings/poTemplate";
	import AdditionalNotes from "./AdditionalNotes.svelte";
  import ApprovedBy from "./ApprovedBy.svelte";
  import DueBy from "./DueBy.svelte";
  import Footer from "./Footer.svelte";
	import PaymentMethod from "./PaymentMethod.svelte";
	import PoNumber from "./PoNumber.svelte";
	import RequestedBy from "./RequestedBy.svelte";
	import Section1 from "./Section1.svelte";
	import Section2 from "./Section2.svelte";
	import Section3 from "./Section3.svelte";
	import Subtitle from "./Subtitle.svelte";
  import Title from "./Title.svelte";
  import { decryptTheData } from "$lib/cryption";
  import { splitEncrypted } from "$lib/utils";

	import {onMount} from "svelte";
  let cryptionKey: CryptoKey | undefined;
  let db: IDBDatabase;
  const dbName = "CryptionKey";
  const dbVersion = 1;
  const objectStoreName = "Encryption_Decryption_Key";

  onMount(async() => {
    const cryptionKeyFileName = localStorage.getItem("cryptionKeyFileName")
    if (cryptionKeyFileName) {

      const request = window.indexedDB.open(dbName, dbVersion);
      request.onerror = (event) => {
        alert(`@getKey: ${request.error}`);
      }
      request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);
        transaction.oncomplete =  (event) => {
          alert("Transaction Complete");
        }
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.get(cryptionKeyFileName);
        request.onerror = (event) => {
          alert(`Error getting ${cryptionKeyFileName}'s key.`)
        }
        request.onsuccess = async (event) => {
          const result = await (event.target as IDBRequest).result;
          alert(`Successfully got "${cryptionKeyFileName}" from the database.`)
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
    pnpLocation,
    productsOrServicesDescriptionsAndPrices,
    poNumber,
    reportingBudgetLine,
    requestedBy,
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
    swiftCode
  } = payeeData[0];
</script>

<div id="pdfTemplate" class="page-container">

  <section class="title">
    <Title />
  </section>

  <section class="subtitle">
    <Subtitle />
  </section>

  <section class="payment-method">
    <PaymentMethod {paymentMethod}/>
  </section>

  <section class="due-by">
    <DueBy {dueDate}/>
  </section>

  <section class="po-number">
    <PoNumber {poNumber}/>
  </section>

  <section class="section-1-label section-label">
    {pdfTemplateSection1String}
  </section>
  <section class="section1">
    <Section1
      {createdDate}
      {topicDivision}
      {reportingBudgetLine}
      {pnpLocation}
      {payeeName}
      homeAddress={decryptedHomeAddress}
    />
  </section>

  <section class="section-2-label section-label">
    {pdfTemplateSection2String}
  </section>
  <section class="section2">
    <Section2
      {productsOrServicesDescriptionsAndPrices}
      {tax}
      {currency}
      {total}
    />
  </section>

  <section class="section-3-label section-label">
    {pdfTemplateSection3String}
  </section>
  <section class="section3">
    <Section3
      {payeeName}
      bankName={decryptedBankName}
      bankAccountNumber={decryptedBankAccountNumber}
      bankAddress={decryptedBankAddress}
      iban={decryptedIban}
      routingNumber={decryptedRoutingNumber}
      swiftCode={decryptedSwiftCode}
    />
  </section>

  <section class="additional-notes">
    <AdditionalNotes
      nationalIdOrBusinessRegistrationNumber={decryptedNationalIdOrBusinessRegistrationNumber}
    />

  </section>

  <section class="requested-by">
    <RequestedBy {requestedBy}/>
  </section>

  <section class="approved-by">
    <ApprovedBy {approvedBy}/>
  </section>

  <section class="footer">
    <Footer />
  </section>

</div>

<style>
  .title {
    grid-area: title;
  }
  .subtitle {
    grid-area: subtitle;
  }
  .payment-method {
    grid-area: paymentMethod;
  }
  .due-by {
    grid-area: dueBy;
  }
  .po-number {
    grid-area: poNumber;
  }
  .section-label {
    font-size: var(--fontSizeSectionLabel);
  }
  .section-1-label{
    grid-area: section1Label;
    padding-top: calc(0.25em + 2px);
  }
  .section1 {
    grid-area: section1;
  }
  .section-2-label{
    grid-area: section2Label;
    padding-top: calc(0.25em + 2px);
  }
  .section2 {
    grid-area: section2;
  }
  .section-3-label{
    grid-area: section3Label;
    padding-top: calc(0.25em + 2px);
  }
  .section3 {
    grid-area: section3;
  }
  .additional-notes {
    grid-area: additionalNotes;
    align-self: center;
  }
  .requested-by {
    grid-area: requestedBy;
    align-self: center;
  }
  .approved-by {
    grid-area: approvedBy;
    align-self: center;
  }
  .footer {
    grid-area: footer;
    align-self: end;
  }
  .page-container {
    background-color: #FFF;
    width: 21cm;
    height: 29.7cm;
    display: grid;
    padding: 30px 45px;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(4, min-content) repeat(3, auto) min-content;
    grid-template-areas:
    ". title"
    ". subtitle"
    ". paymentMethod"
    ". dueBy"
    ". poNumber"
    "section1Label section1"
    "section2Label section2"
    "section3Label section3"
    ". additionalNotes"
    ". requestedBy"
    ". approvedBy"
    "footer footer";
    column-gap: 0.12em;
  }
  @page {
    size: 21cm 29.7cm;
    margin: 30mm 45mm 30mm 45mm;
  }
</style>
