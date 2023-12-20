<script lang="ts">
  import { navigating, page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';

  $: loggedInUser = $page.data.user
  console.log($page);
</script>

{#if loggedInUser && $page.route.id != "/purchaseOrders/create/pdf/[po_id]"}
  <Navbar />
{/if}
{#if $navigating}
  Navigating...
{/if}
<slot />

<style>
</style>
