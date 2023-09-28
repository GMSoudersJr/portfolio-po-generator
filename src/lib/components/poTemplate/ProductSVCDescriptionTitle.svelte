<script>
	import {ifEventRelated, productServiceDescription} from "$lib/strings/poSheet";
</script>

<div class="grid-container">
  <div class="description">
    <h5>
      {productServiceDescription}
    </h5>
    <p class="warning">
      {ifEventRelated}
    </p>
  </div>
</div>

<style>
  .description {
    grid-area: description;
    border-right: 1px solid black;
    display: flex;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: auto;
    grid-template-areas:
    "description .";
  }

</style>
