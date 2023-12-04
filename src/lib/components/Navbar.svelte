<script lang="ts">
	import {afterNavigate} from '$app/navigation';

  import { page } from '$app/stores';

  afterNavigate(async() => {
    let allNavItems = document.querySelectorAll(".nav-link");
    let path = window.location.pathname;
    const urlBasePath = path.split('/').at(1);

    console.log(path.split('/'));

    allNavItems.forEach((item) => {
      const navBasePath = item.getAttribute("href")?.split('/').at(1);
      if (
        item.classList.contains("active") &&
        urlBasePath != navBasePath
      ) {
        item.classList.remove("active");
      }
      if (item.getAttribute("href") === window.location.pathname) {
        item.classList.add("active");
      }
    });
  })

  function handleClick(event: MouseEvent) {
    let clicked = event.target as HTMLAnchorElement;
    let allNavItems = document.querySelectorAll(".nav-link");
    allNavItems.forEach(( item ) => {
      if ( item.classList.contains("active") && item.id != clicked.id ) {
        item.classList.remove("active");
      }
    })
    clicked.classList.add("active");
  }
</script>

<nav class="navbar">
  <ul>
    {#if !$page.data.user}
    <li class="lonely">
      <a class="nav-link" href="/login">Login</a>
    </li>
    {:else}
    <li>
      <a
        id="link-home"
        class="nav-link active"
        href="/"
        on:click={handleClick}
      >
        Home
      </a>
    </li>
    <li>
      <a
        id="link-payees"
        class="nav-link"
        href="/payees"
        on:click={handleClick}
      >
        Payees
      </a>
    </li>
    <li>
      <a
        id="link-pos"
        class="nav-link"
        href="/purchaseOrders"
        on:click={handleClick}
      >
        Purchase Orders
      </a>
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
  li > a.active {
    color: var(--tangerineYellow);
  }
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
