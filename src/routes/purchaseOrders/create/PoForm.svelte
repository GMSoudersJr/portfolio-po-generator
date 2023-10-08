<script lang="ts">
  import { changeToPascalCase, formatPoNumberDateString, getInitials, updateArrayOfNumbers } from "$lib/utils";
  import { numberOfProductsOrServices } from "$lib/stores";
	import ApprovedBy from "./ApprovedBy.svelte";
	import CreatedDate from "./CreatedDate.svelte";
	import Currency from "$lib/components/forms/Currency.svelte";
	import DueDate from "./DueDate.svelte";
	import NumberOfProductsOrServices from "./NumberOfProductsOrServices.svelte";
	import PayeeName from "./PayeeName.svelte";
	import PaymentMethod from "./PaymentMethod.svelte";
	import PnpLocation from "./PnpLocation.svelte";
	import PoNumber from "./PoNumber.svelte";
	import ProductAndPrice from "./ProductAndPrice.svelte";
	import ReportingBudgetLine from "./ReportingBudgetLine.svelte";
	import RequestedBy from "./RequestedBy.svelte";
	import SubmitPoButton from "./SubmitPoButton.svelte";
	import Subtotal from "./Subtotal.svelte";
	import Tax from "./Tax.svelte";
	import TaxRate from "./TaxRate.svelte";
	import TopicDivision from "./TopicDivision.svelte";
	import Total from "./Total.svelte";
	import PoSummary from "./PoSummary.svelte";
	import type {PoFormPoNumber} from "$lib/classes";
	import {dueDate, requestedBy, topicDivision} from "$lib/strings/poForm";

  $: arrayOfNumbers = updateArrayOfNumbers($numberOfProductsOrServices);
  interface SubtotalObject {
    [index: string]: number;
  }


  const subtotalObject: SubtotalObject = {};
  const poFormPoNumber: PoFormPoNumber = {
    dueDate: formatPoNumberDateString(dueDate.value),
    summary: "",
    topicDivision: changeToPascalCase(topicDivision.options.at(0)?.value),
    requesterInitials: getInitials(requestedBy.options.at(0)?.value)
  };

  function resetPriceForRemovedProduct() {
    subtotalObject[`price${arrayOfNumbers.length}`] = 0
  }

  function handlePriceInput(event: CustomEvent) {
    const priceInput = +event.detail.price.value;
    const priceFor: string = event.detail.price.for;
    subtotalObject[priceFor] = priceInput;
  }

  function handlePoNumberUpdate(event: CustomEvent) {
    const key: string = event.detail.poNumber.key;
    const value = event.detail.poNumber.value;
    poFormPoNumber[`${key}`] = value;
    console.log(poFormPoNumber);
  }

  export let clickedPayeeName = "";
  export let clickedPayeeTaxRate = 0;
  export let clickedPayee_id = "";
  export let clickedPayeeCurrency = "";

  $: subtotalActual = Object.values(subtotalObject).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  $: taxActual = +clickedPayeeTaxRate * +subtotalActual;
  $: totalActual = +subtotalActual + +taxActual;
  $: poNumberActual = poFormPoNumber;
</script>

<form
  method="post"
  action="?/add"
>
  <PayeeName
    on:searching
    {clickedPayeeName}
  />
  <PoSummary on:summaryInput={handlePoNumberUpdate}/>
  <NumberOfProductsOrServices
    on:removalOfProductOrService={resetPriceForRemovedProduct}
  />
  {#each arrayOfNumbers as d}
    <ProductAndPrice
      number={(d).toString()}
      on:priceInput={handlePriceInput}
    />
  {/each}
  <Subtotal
    {subtotalActual}
  />
  <TaxRate {clickedPayeeTaxRate}/>
  <Tax {taxActual}/>
  <Total {totalActual}/>
  <DueDate on:dueDateLoad={handlePoNumberUpdate} />
  <CreatedDate />
  <PaymentMethod />
  <Currency {clickedPayeeCurrency}/>
  <TopicDivision on:topicDivisionSelected={handlePoNumberUpdate}/>
  <ReportingBudgetLine />
  <PnpLocation />
  <RequestedBy on:requesterChange={handlePoNumberUpdate}/>
  <ApprovedBy />
  <PoNumber {poNumberActual}/>
  <SubmitPoButton />
</form>

<style>
  form {
    width: 100%;
    padding-top: 1rem;
  }
</style>
