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
      <form class="logout-form" action="/logout" method="POST">
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
    grid-template-rows: 3.25rem;
    align-items: stretch;
  }
  li {
    display: grid;
  }
  li .nav-link {
    display: grid;
    color: #FFFFFF;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }
  li .logout-form {
    display: block;
  }
  li a:hover, li form:hover {
    background-color: #111;;
  }
  .logout-button {
    background-color: transparent;
    font-size: 1rem;
    border: none;
    color: #FFFFFF;
    height: 100%;
    width: 100%;
  }
  .logout-button:hover {
    cursor: pointer;
  }
</style>

