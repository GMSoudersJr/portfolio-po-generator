<script lang="ts">
	import {goto} from "$app/navigation";
	import {navigating} from "$app/stores";

  import { PoTableHeadings } from "$lib/enums";
	import {showToast} from "$lib/toasts";
	import type {Document} from "mongodb";

  export let overviewPos: Document[] | undefined;

  $: headers = Object.keys(overviewPos?.at(0) as {});
  $: overviewHeaders = headers.map((header) => {
    return PoTableHeadings[header];
  });
  async function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const po_id = target.parentElement?.id
    showToast(
      "info",
      "Fetching data...",
      "Slow connections cause slow responses."
    );
    //open a dialog box for CRUD oerations
    await goto(`purchaseOrders/create/pdf/${po_id}`);
  }
</script>

{#if overviewPos && !$navigating}
<table class="po-overview-table">
  <tr class="header-row">
    {#each overviewHeaders as header}
      {#if header != "_id"}
      <th class={`table-header ${header}`}>
        {header}
      </th>
      {/if}
    {/each}
  </tr>
  {#each overviewPos as po (po._id)}
    <tr
      on:click={handleClick}
      id={po._id}
    >
      {#each Object.entries(po) as entry}
        {#if entry[0] != "_id" && entry[0] != "productsOrServicesDescriptionsAndPrices" }
          <td
            class={entry[0]}
            title={entry[1]}
          >
          {#if entry[0] == "currency"}
            {entry[1].toUpperCase()}
          {:else if entry[0] == "subtotal" || entry[0] == "tax" || entry[0] == "total"}
            {entry[1].toLocaleString('en-US')}
          {:else if entry[0] == "poNumber"}
            {entry[1].substring(0,15).concat('...')}
          {:else}
            {entry[1]}
          {/if}
        </td>
        {/if}
        {#if entry[0] == "productsOrServicesDescriptionsAndPrices"}
          <td
            id="{po._id}"
            class="product-description-and-price"
          >
          {#each entry[1] as product}
            <tr
              class="table-row-grid"
              id={po._id}
            >
              <td class="description">
                {product.productOrServiceDescription}
              </td>
              <td class="price">
               {product.price.toLocaleString('en-US')}
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
    padding: 0.18em 0.3em;
  }
  tr:has(td):hover {
    background-color: var(--kellyGreen);
    cursor: default;
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
  td.total, td.tax, td.subtotal {
    text-align: right;
    padding: 0.18em 0.25em;
    padding-left: 0.5rem;
  }
  td.dueDate,
  td.createdDate,
  td.pnpLocation,
  td.paymentMethod {
    text-align: center;
  }
  .header-row {
    background-color: var(--tangerineYellow);
  }
</style>
