<script lang="ts">
	import type {Po} from "$lib/classes";
  import { PoTableHeadings } from "$lib/enums";
	import type {Document} from "mongodb";

  export let overviewPos: Document[] | undefined;
  $: headers = Object.keys(overviewPos?.at(0));
  $: overviewHeaders = headers.map((header) => {
    return PoTableHeadings[header];
  })
</script>

{#if overviewPos}
<table class="po-overview-table">
  <tr>
    {#each overviewHeaders as header}
      {#if header != "_id"}
      <th class="table-header">
        {header}
      </th>
      {/if}
    {/each}
  </tr>
  {#each overviewPos as po (po._id)}
    <tr>
      {#each Object.entries(po) as entry}
        {#if entry[0] != "_id" && entry[0] != "productsOrServicesDescriptionsAndPrices" }
        <td class={entry[0]}>
          {entry[1]}
        </td>
        {/if}
        {#if entry[0] == "productsOrServicesDescriptionsAndPrices"}
          <td class="product-description-and-price">
          {#each entry[1] as product}
            <tr class="table-row-grid">
              <td class="description">
                {product.productOrServiceDescription}
              </td>
              <td class="price">
               {product.price}
              </td>
            </tr>
          {/each}
          </td>
        {/if}
      {/each}
    </tr>
  {/each}
</table>
{/if}

<style>
  table {
    width: max-content;
  }
  table, th, td, tr {
    border: 0.1rem solid #999;
    border-collapse: collapse;
    padding: 0.18em 0.25em;
  }
  .table-header {
    font-size: 0.8rem;
  }
  .product-description-and-price {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: min-content;
    align-items: center;
    border: none;
  }
  .table-row-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
  }
  .description, .price {
    border: none;
  }
  td {
    font-size: 0.6rem;
  }
  td.total, td.tax {
    text-align: right;
  }
  td.dueDate, td.createdDate, td.pnpLocation {
    text-align: center;
  }
</style>
