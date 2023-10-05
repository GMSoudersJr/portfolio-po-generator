<script lang="ts">
	import ApprovedBy from "./ApprovedBy.svelte";
	import PnpLocation from "./PnpLocation.svelte";
	import ReportingBudgetLine from "./ReportingBudgetLine.svelte";
	import RequestedBy from "./RequestedBy.svelte";
	import TopicDivision from "./TopicDivision.svelte";
	import Currency from "./Currency.svelte";
	import PaymentMethod from "./PaymentMethod.svelte";
	import SubmitPoButton from "./SubmitPoButton.svelte";
	import Dates from "./Dates.svelte";
	import ProductAndPrice from "./ProductAndPrice.svelte";
	import PayeeName from "./PayeeName.svelte";
	import Tax from "./Tax.svelte";
	import TaxRate from "./TaxRate.svelte";
	import Subtotal from "./Subtotal.svelte";
	import Total from "./Total.svelte";
	import NumberOfProductsOrServices from "./NumberOfProductsOrServices.svelte";
  import { updateArrayOfNumbers } from "$lib/utils";
  import { numberOfProductsOrServices } from "$lib/stores";
	import PoNumber from "./PoNumber.svelte";

  $: arrayOfNumbers = updateArrayOfNumbers($numberOfProductsOrServices);
  interface ProductAndServicePricesObject {
    [index: string]: number;
  }
  const productAndServicePricesObject: ProductAndServicePricesObject = {}

  function handlePriceInput(event: CustomEvent) {
  if (
    arrayOfNumbers.length < Object.entries(productAndServicePricesObject).length &&
    productAndServicePricesObject[`price${arrayOfNumbers.length + 1}`] > 0
  ) {
      productAndServicePricesObject[`price${arrayOfNumbers.length + 1}`] = 0
    }

    const priceInput = +event.detail.price.value;
    const priceFor: string = event.detail.price.for;
    productAndServicePricesObject[priceFor] = priceInput;
    console.log(productAndServicePricesObject);
  }

  export let clickedPayeeName = "";
  export let clickedPayeeTaxRate = 0;
  export let clickedPayee_id = "";
</script>

<form
  method="post"
  action="?/add"
>
  <PayeeName
    on:searching
    {clickedPayeeName}
  />
  <NumberOfProductsOrServices />
  {#each arrayOfNumbers as d}
    <ProductAndPrice
      number={(d).toString()}
      on:priceInput={handlePriceInput}
    />
  {/each}
  <PoNumber />
  <TaxRate {clickedPayeeTaxRate}/>
  <Tax />
  <Subtotal
    {clickedPayeeTaxRate}
    {productAndServicePricesObject}
  />
  <Total />
  <Dates />
  <PaymentMethod />
  <Currency />
  <TopicDivision />
  <ReportingBudgetLine />
  <PnpLocation />
  <RequestedBy />
  <ApprovedBy />
  <SubmitPoButton />
</form>

<style>
  form {
    width: 100%;
    padding-top: 1rem;
  }
</style>
