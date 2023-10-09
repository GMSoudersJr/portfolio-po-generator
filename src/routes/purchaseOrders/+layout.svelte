<script lang="ts">
import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<nav class="sub-navbar">
  <ul>
    <li>
      <a class="nav-link" href="/purchaseOrders/create">
        Create a new Purchase Order
      </a>
    </li>
  </ul>
</nav>

<aside>
</aside>

<main>
  <slot />
</main>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #666;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    justify-content: center;
    align-items: baseline;
  }
  li {
    display: inline;
  }
  .nav-link {
    display: block;
    color: #FFFFFF;
    text-align: center;
    padding: 10px 12px;
    text-decoration: none;
  }
  li a:hover {
    background-color: #444;;
  }
</style>

