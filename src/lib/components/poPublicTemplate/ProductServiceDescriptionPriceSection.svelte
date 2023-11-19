<script lang="ts">
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
</section>
<TaxesAndTotalsSection
  {tax}
  {currency}
  {total}
/>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(auto-fill, auto);
    row-gap: 0.5rem;
  }
</style>
