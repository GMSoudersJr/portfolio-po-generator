<script lang="ts">
  import { changeToPascalCase, updateArrayOfNumbers } from "$lib/utils";
  import { numberOfProductsOrServices } from "$lib/stores";
	import ApprovedBy from "./ApprovedBy.svelte";
	import CreatedDate from "./CreatedDate.svelte";
	import Currency from "$lib/components/forms/Currency.svelte";
	import DueDate from "./DueDate.svelte";
	import NumberOfProductsOrServices from "./NumberOfProductsOrServices.svelte";
	import PayeeName from "./PayeeName.svelte";
	import PaymentMethod from "./PaymentMethod.svelte";
	import Location from "./Location.svelte";
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
  import type { ActionData } from "./$types";
	import type {SubmitFunction} from "@sveltejs/kit";
	import {showToast} from "$lib/toasts";
	import {goto} from "$app/navigation";
	import {applyAction, enhance} from "$app/forms";
	import PayeeCards from "./PayeeCards.svelte";
	import type {Document} from "mongodb";
	import {reportBudgetLine, topicDivision} from "$lib/strings/poForm";

  $: arrayOfNumbers = updateArrayOfNumbers($numberOfProductsOrServices);
  interface SubtotalObject {
    [index: string]: number;
  }

  const subtotalObject: SubtotalObject = {};
  let showFullForm = false;

  function handlePoNumberUpdate(event: CustomEvent) {
    const key: string = event.detail.poNumber.key;
    const value = event.detail.poNumber.value;
    poFormPoNumber[`${key}`] = value;
  }

  function resetPriceForRemovedProduct() {
    subtotalObject[`price${arrayOfNumbers.length}`] = 0
  }

  function handlePriceInput(event: CustomEvent) {
    const priceInput = +event.detail.price.value;
    const priceFor: string = event.detail.price.for;
    subtotalObject[priceFor] = priceInput;
  }

  export let clickedPayeeName = "";
  export let clickedPayeeTaxRate = 0;
  export let clickedPayee_id = "";
  export let clickedPayeeCurrency = "";
  export let clickedPayeeTopicDivision = "";
  export let clickedPayeeReportingBudgetLine = "";
  export let poFormPoNumber: PoFormPoNumber;
  export let payees: Document[] | undefined;
  export let form: ActionData;

  $: subtotalActual = Object.values(subtotalObject).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  $: taxActual = +clickedPayeeTaxRate * +subtotalActual;
  $: totalActual = +subtotalActual + +taxActual;
  $: poNumberActual = poFormPoNumber;

  const enhancement: SubmitFunction = async () => {
    showToast(
      "success",
      "Form Submitted",
      ""
    )
    return async ({ result }) => {
      if ( result.type === 'redirect' ) {
        await goto(result.location, { invalidateAll: true });
      } else {
        await applyAction(result);
      }
    };
  }

  function handleSearch(event: CustomEvent) {
    const query = event.detail.query.toLowerCase();
    payees?.forEach(payee => {
      const shouldBeShown = payee.beneficiaryName.toLowerCase().includes(query);
      payee.shouldBeShown = shouldBeShown;
    });
    payees = payees;
    showFullForm = false;
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
    showFullForm = true;

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
</script>

{#if form?.error}
  <p class="error-message">{form.message}</p>
{/if}
<form
  method="post"
  action="?/add"
  use:enhance={enhancement}
>
  <PayeeName
    on:searching={handleSearch}
    {clickedPayeeName}
    {clickedPayee_id}
  />
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
    {#if showFullForm}
  <PoSummary
    on:summaryInput={handlePoNumberUpdate}
  />
  {#each arrayOfNumbers as d}
    <ProductAndPrice
      on:priceInput={handlePriceInput}
      number={(d).toString()}
    />
  {/each}
  <NumberOfProductsOrServices
    on:removalOfProductOrService={resetPriceForRemovedProduct}
  />
  <Subtotal
    {subtotalActual}
  />
  <TaxRate
    {clickedPayeeTaxRate}
  />
  <Tax
    {taxActual}
  />
  <Total
    {totalActual}
  />
  <DueDate
    on:dueDateLoad={handlePoNumberUpdate}
  />
  <CreatedDate />
  <PaymentMethod />
  <Currency
    {clickedPayeeCurrency}
    value={clickedPayeeCurrency}
    disabled={false}
  />
  <TopicDivision
    on:topicDivisionSelected={handlePoNumberUpdate}
    {clickedPayeeTopicDivision}
  />
  <ReportingBudgetLine
    {clickedPayeeReportingBudgetLine}
  />
  <Location />
  <RequestedBy
    on:requesterChange={handlePoNumberUpdate}
  />
  <ApprovedBy />
  <PoNumber
    {poNumberActual}
  />
  <SubmitPoButton />
    {/if}
</form>

<style>
  form {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
</style>
