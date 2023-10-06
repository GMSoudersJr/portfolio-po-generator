<script lang="ts">
  import PoTemplate from '$lib/components/poTemplate/PoTemplate.svelte'; 
  import { page } from '$app/stores';
  import HomePage from './HomePage.svelte';
  import LoginPage from './LoginPage.svelte';
  import type { ActionData } from './login/$types';
  export let form: ActionData;
</script>

<div class="page-container">
  {#if $page.data.user}
    <HomePage />
    {:else}
    <LoginPage {form}/>
  {/if}
</div>

<style>
  .page-container {
    height: calc(100vh - 47px);
    width: 100vw;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: min-content;
    justify-content: center;
    align-items: center;
    background-color: #259259;
  }

</style>
