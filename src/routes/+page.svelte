<script lang="ts">
  import { page } from '$app/stores';
  import HomePage from './HomePage.svelte';
  import LoginPage from './LoginPage.svelte';
  import type { ActionData } from './login/$types';
  import {onMount} from 'svelte';

  export let form: ActionData;

  onMount(async () => {
    if ( $page.data.key ) {
      localStorage.setItem("key", $page.data.key)
    } else {
      throw alert("there is no key");
    }
    console.log("HOME PAGE on mount", $page?.data);
  })

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
