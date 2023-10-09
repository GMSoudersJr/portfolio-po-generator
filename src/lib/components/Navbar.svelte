<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="navbar">
  <ul>
    {#if !$page.data.user}
    <li class="lonely">
      <a class="nav-link" href="/login">Login</a>
    </li>
    {:else}
    <li>
      <a class="nav-link" href="/">Home</a>
    </li>
    <li>
      <a class="nav-link" href="/payees">Payees</a>
    </li>
    <li>
      <a class="nav-link" href="/purchaseOrders">Purchase Orders</a>
    </li>
    <li>
      <form class="nav-link" action="/logout" method="POST">
        <input class="logout-button" type="submit" value="Log out">
      </form>
    </li>
    {/if}
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #333;
    display: grid;
    grid-template-columns: repeat(4, minmax(max-content, 1fr));
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
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover, li form:hover {
    background-color: #111;;
  }
  .logout-button {
    height: 100%;
    width: 100%;
    background-color: transparent;
    padding: 0;
    font-size: 1rem;
    border: none;
    color: #FFFFFF;
  }
  .logout-button:hover {
    cursor: pointer;
  }
</style>

