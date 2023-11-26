<script lang="ts">
  import { navigating, page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';

  $: loggedInUser = $page.data.user
</script>

{#if loggedInUser}
  <Navbar />
{/if}
{#if $navigating}
  Navigating...
{/if}
<slot />

<style>
</style>
