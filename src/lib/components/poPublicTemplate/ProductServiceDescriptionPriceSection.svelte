<script lang="ts">
	import AdditionalNotes from "./AdditionalNotes.svelte";

	import ProductSvcDescriptionLine from "./ProductSVCDescriptionLine.svelte";
  import ProductSvcDescriptionTitle from "./ProductSVCDescriptionTitle.svelte";
	import TaxesAndTotalsSection from "./TaxesAndTotalsSection.svelte";
  interface ProductDescriptionAndPrice {
    productOrServiceDescription: string;
    price: number;
  }
  const filler: ProductDescriptionAndPrice = {
    productOrServiceDescription: "",
    price: 0
  }

  export let productsOrServicesDescriptionsAndPrices = [
    {productOrServiceDescription: "Service One", price: 259},
    {productOrServiceDescription: "Service Two", price: 259},
    {productOrServiceDescription: "Service Three", price: 259},
    {productOrServiceDescription: "Service Four", price: 259}
  ];


  while (productsOrServicesDescriptionsAndPrices.length < 4) {
    productsOrServicesDescriptionsAndPrices.push(filler);
  }

  export let currency = "krw";
  export let tax = 0;
  export let total = 1000000000;
  export let taxRate = 0;
  export let subtotal = 0;
  export let nationalIdOrBusinessRegistrationNumber: string;
</script>

<section class="grid-container">
  <ProductSvcDescriptionTitle
    {currency}
  />
  {#each productsOrServicesDescriptionsAndPrices as entry}
    <ProductSvcDescriptionLine
      description={entry.productOrServiceDescription}
      price={entry.price}
    />
  {/each}
  <div class="sub-grid-container">
    <AdditionalNotes {nationalIdOrBusinessRegistrationNumber} />
    <TaxesAndTotalsSection
      {subtotal}
      {tax}
      {taxRate}
      {currency}
      {total}
    />
  </div>
</section>

<style>
  .sub-grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    column-gap: 20px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(auto-fill, auto);
    row-gap: 0.5rem;
  }
</style>
