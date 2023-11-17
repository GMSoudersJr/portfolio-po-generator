<script lang="ts">
  import type { Document } from "mongodb";
  import {
    dbName,
    dbVersion,
    objectStoreName
  } from '$lib/indexedDb';
  import {
    dataDecryptedString,
    invalidKeyUsedString
  } from "$lib/strings/toasts";
  import {
    showToastInvalidKey,
    splitEncrypted
  } from "$lib/utils";
  import { onMount } from 'svelte';
  import { applyAction, enhance } from "$app/forms";
  import { showToast } from '$lib/utils';
  import { decryptTheData } from "$lib/cryption";
  import BankAccountNumber from "$lib/components/forms/payee/BankAccountNumber.svelte";
  import BankAddress from "$lib/components/forms/payee/BankAddress.svelte";
  import BankName from "$lib/components/forms/payee/BankName.svelte";
  import BeneficiaryName from "$lib/components/forms/payee/BeneficiaryName.svelte";
  import ButtonContainer from '$lib/components/forms/payee/ButtonContainer.svelte';
  import HomeAddress from "$lib/components/forms/payee/HomeAddress.svelte";
  import Currency from "$lib/components/forms/Currency.svelte";
  import Iban from "$lib/components/forms/payee/Iban.svelte";
  import NationalIdOrBusinessRegistration from "$lib/components/forms/payee/NationalIDOrBusinessRegistration.svelte";
  import PayeeType from "$lib/components/forms/payee/PayeeType.svelte";
  import ReportingBudgetLine from "$lib/components/forms/payee/ReportingBudgetLine.svelte";
  import RoutingNumber from "$lib/components/forms/payee/RoutingNumber.svelte";
  import SwiftCode from "$lib/components/forms/payee/SwiftCode.svelte";
  import TopicDivision from "$lib/components/forms/payee/TopicDivision.svelte";
	import type {SubmitFunction} from "@sveltejs/kit";
	import {goto} from "$app/navigation";

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
          //alert(transactionComplete);
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
            console.log(purpose);
            if ( payeeData?.nationalIdOrBusinessRegistrationNumber ) {
              decryptedNationalIdOrBusinessRegistrationNumber =
                await decryptDataFromDatabase(payeeData.nationalIdOrBusinessRegistrationNumber);
            }
            if ( payeeData?.homeAddress ) {
              decryptedHomeAddress =
                await decryptDataFromDatabase(payeeData.homeAddress);
            }
            if ( payeeData?.bankName ) {
              decryptedBankName =
                await decryptDataFromDatabase(payeeData.bankName);
            }
            if ( payeeData?.bankAccountNumber ) {
              decryptedBankAccountNumber =
                await decryptDataFromDatabase(payeeData.bankAccountNumber);
            }
            if ( payeeData?.iban ) {
              decryptedIban = await decryptDataFromDatabase(payeeData.iban);
            }
            if ( payeeData?.bankAddress ) {
              decryptedBankAddress =
                await decryptDataFromDatabase(payeeData.bankAddress);
            }
            if ( payeeData?.routingNumber ) {
              decryptedRoutingNumber =
                await decryptDataFromDatabase(payeeData.routingNumber);
            }
            if ( payeeData?.swiftCode ) {
              decryptedSwiftCode =
                await decryptDataFromDatabase(payeeData.swiftCode);
            }
            if (purpose.includes('update')) {
              try {
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
                    purpose = ['disabled'];
                    showToastInvalidKey(
                      "error",
                      "Error",
                      invalidKeyUsedString
                    );
                  } else {
                    showToast(
                      "success",
                      "Success",
                      dataDecryptedString
                    );
                  }
              } catch (error) {
                console.dir(error);
              }
            }
          }
        }
      }
    }
  });

  let decryptedNationalIdOrBusinessRegistrationNumber: string;
  let decryptedHomeAddress: string;
  let decryptedBankName: string;
  let decryptedBankAccountNumber: string;
  let decryptedIban: string;
  let decryptedBankAddress: string;
  let decryptedRoutingNumber: string;
  let decryptedSwiftCode: string;

  export let key: CryptoKey;
  export let payeeData: Document | undefined;
  let payee_id = payeeData?._id;
  export let purpose = ['create'];
  $: disabled = purpose.includes('disabled');
  const enhancement: SubmitFunction = async (
    { formData, action }
  ) => {
    const payeeName = formData.get("beneficiaryName")?.toString();
    const formAction = action.search;
    let toastDescriptionString: string;
    if ( formAction.includes('update') ) {
      toastDescriptionString = `Updated ${payeeName}`
    } else {
      toastDescriptionString = `Added ${payeeName}.`
    }
    return async ({ result }) => {
      console.log(result);
      if ( result.type === 'redirect' ) {
        await goto(result.location);
        showToast(
          "success",
          `Form Submitted`,
          toastDescriptionString
        );
      } else {
        await applyAction(result);
      }
    };
  }
</script>

<form
  method="post"
  action="?/add"
  use:enhance={enhancement}
>
  <BeneficiaryName
    value={payeeData?.beneficiaryName}
    {disabled}
  />
  <PayeeType
    value={payeeData?.typeOfPayee}
    {disabled}
  />
  <TopicDivision
    value={payeeData?.topicDivision}
    {disabled}
  />
  <ReportingBudgetLine
    value={payeeData?.reportingBudgetLine}
    {disabled}
  />
  <NationalIdOrBusinessRegistration
    encryptedValue = {payeeData?.nationalIdOrBusinessRegistrationNumber}
    {decryptedNationalIdOrBusinessRegistrationNumber}
    {key}
    {disabled}
  />
  <Currency
    value={payeeData?.currency}
    {disabled}
  />
  <HomeAddress
    encryptedValue = {payeeData?.homeAddress}
    {decryptedHomeAddress}
    {key}
    {disabled}
  />
  <BankName
    encryptedValue = {payeeData?.bankName}
    {decryptedBankName}
    {key}
    {disabled}
  />
  <BankAccountNumber
    encryptedValue = {payeeData?.bankAccountNumber}
    {decryptedBankAccountNumber}
    {key}
    {disabled}
  />
  <Iban
    encryptedValue = {payeeData?.iban}
    {decryptedIban}
    {key}
    {disabled}
  />
  <BankAddress
    encryptedValue = {payeeData?.bankAddress}
    {decryptedBankAddress}
    {key}
    {disabled}
  />
  <RoutingNumber
    encryptedValue = {payeeData?.routingNumber}
    {decryptedRoutingNumber}
    {key}
    {disabled}
  />
  <SwiftCode
    encryptedValue = {payeeData?.swiftCode}
    {decryptedSwiftCode}
    {key}
    {disabled}
  />
  <ButtonContainer
    {payeeData}
    {payee_id}
    {purpose}
  />
</form>


<style>
  form {
    width: 100%;
  }
</style>
