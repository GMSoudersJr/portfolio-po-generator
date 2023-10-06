<script>
  import PoTemplate from '$lib/components/poTemplate/PoTemplate.svelte'; 
  import HomePage from './HomePage.svelte';
</script>

<div class="page-container">
  <HomePage />
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
