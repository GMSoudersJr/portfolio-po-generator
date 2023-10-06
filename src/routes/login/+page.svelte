<script lang="ts">
  import LoginPage from '../LoginPage.svelte';
import type { ActionData } from './$types';
  export let form: ActionData;
</script>

<div class="page-container">
  <LoginPage {form} />

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
