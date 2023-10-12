<script lang="ts">
	import ProductSvcDescriptionLine from "./ProductSVCDescriptionLine.svelte";
  import ProductSvcDescriptionTitle from "./ProductSVCDescriptionTitle.svelte";
	import TotalLine from "./TotalLine.svelte";
	import WithholdingTaxOrVat from "./WithholdingTaxOrVat.svelte";
  interface ProductDescriptionAndPrice {
    productOrServiceDescription: string;
    price: string;
  }
  const filler: ProductDescriptionAndPrice = {
    productOrServiceDescription: "",
    price: ""
  }

  export let productsOrServicesDescriptionsAndPrices = [
    {productOrServiceDescription: "Service One", price: ""},
    {productOrServiceDescription: "Service Two", price: ""},
    {productOrServiceDescription: "Service Three", price: ""},
    {productOrServiceDescription: "Service Four", price: ""},
  ];


  while (productsOrServicesDescriptionsAndPrices.length < 4) {
    productsOrServicesDescriptionsAndPrices.push(filler);
  }

  export let tax = "0";
  export let total = "$ 1,000,000,000";
</script>

<section class="grid-container">
  <ProductSvcDescriptionTitle />
  {#each productsOrServicesDescriptionsAndPrices as entry}
    <ProductSvcDescriptionLine
      description={entry.productOrServiceDescription}
      price={entry.price}
    />
  {/each}
  <WithholdingTaxOrVat {tax}/>
  <TotalLine {total}/>
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(7, auto);
    border: 2px solid black;
  }
</style>
