<script lang="ts">
  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';
</script>

{#if  $page.data.user}
  <Navbar />
{/if}
<slot />

<style>
</style>

