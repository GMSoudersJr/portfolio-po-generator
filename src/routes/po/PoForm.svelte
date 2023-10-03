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

  $: arrayOfNumbers = updateArrayOfNumbers($numberOfProductsOrServices);


</script>

<form
  method="post"
  action="?/add"
>
  <PayeeName />
  <NumberOfProductsOrServices />
  {#each arrayOfNumbers as d, i}
  <ProductAndPrice number={(i + 1).toString()}/>
  {/each}
  <Tax />
  <TaxRate />
  <Subtotal />
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
    width: 30%;
  }
</style>
