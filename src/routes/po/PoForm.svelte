<script lang="ts">
  import { updateArrayOfNumbers } from "$lib/utils";
  import { numberOfProductsOrServices } from "$lib/stores";
	import ApprovedBy from "./ApprovedBy.svelte";
	import Currency from "$lib/components/forms/Currency.svelte";
	import Dates from "./Dates.svelte";
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

  $: arrayOfNumbers = updateArrayOfNumbers($numberOfProductsOrServices);
  interface SubtotalObject {
    [index: string]: number;
  }

  const subtotalObject: SubtotalObject = {}

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

  $: subtotalActual = Object.values(subtotalObject).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  $: taxActual = +clickedPayeeTaxRate * +subtotalActual;
  $: totalActual = +subtotalActual + +taxActual;
</script>

<form
  method="post"
  action="?/add"
>
  <PayeeName
    on:searching
    {clickedPayeeName}
  />
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
  <Dates />
  <PaymentMethod />
  <Currency />
  <TopicDivision />
  <ReportingBudgetLine />
  <PnpLocation />
  <RequestedBy />
  <ApprovedBy />
  <PoNumber />
  <SubmitPoButton />
</form>

<style>
  form {
    width: 100%;
    padding-top: 1rem;
  }
</style>
