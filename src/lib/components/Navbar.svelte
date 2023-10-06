<script>
</script>

<nav class="navbar">
  <ul>
    <li>
      <a class="nav-link" href="/">Home</a>
    </li>
    <li>
      <a class="nav-link" href="/payees/create">Payees</a>
    </li>
    <li>
      <a class="nav-link" href="/purchaseOrders/create">Purchase Orders</a>
    </li>
  </ul>
</nav>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #333;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
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
  li a:hover {
    background-color: #111;;
  }
</style>

