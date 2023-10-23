<script lang="ts">
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
    width: 100%;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: min-content;
    justify-content: center;
    align-items: center;
  }

</style>
