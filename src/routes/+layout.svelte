<script lang="ts">
  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';

  $: loggedInUser = $page.data.user
</script>

{#if loggedInUser}
  <Navbar />
{/if}
<slot />

<style>
</style>

