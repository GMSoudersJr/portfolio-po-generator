<script>
	import ProductSvcDescriptionLine from "./ProductSVCDescriptionLine.svelte";
import ProductSvcDescriptionTitle from "./ProductSVCDescriptionTitle.svelte";
	import TotalLine from "./TotalLine.svelte";
	import WithholdingTaxOrVat from "./WithholdingTaxOrVat.svelte";

  export let productServices = [
    {description: "Service One", price: 0},
    {description: "Service Two", price: 0},
    {description: "Service Three", price: 0},
    {description: "Service Four", price: 0},
  ];
</script>

<section class="grid-container">
  <div class="section-data-container">
    <ProductSvcDescriptionTitle />
    {#each productServices as productOrService}
      <ProductSvcDescriptionLine
        description={productOrService.description}
        price={productOrService.price}
      />
    {/each}
    <WithholdingTaxOrVat />
    <TotalLine />
  </div>
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
  }
  .section-data-container {
    border: 2px solid black;
  }
</style>
