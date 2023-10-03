<script>
	import Price from "./Price.svelte";
  import ProductSvcDescription from "./ProductServiceDescription.svelte";

  /**
   *@type string
   */
  export let number;
</script>

<section class="section-grid-container">
  <div class="product-service-description">
    <ProductSvcDescription {number}/>
  </div>
  <div class="price">
    <Price {number}/>
  </div>
</section>

<style>
  .section-grid-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "productServiceDescription price";
    column-gap: 2em;
  }
  .price {
    grid-area: price;
  }
  .product-service-description {
    grid-area: productServiceDescription;
  }
</style>
