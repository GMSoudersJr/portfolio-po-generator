<script lang="ts">
	import LoginCard from "$lib/components/LoginCard.svelte";
  import type { ActionData } from "./$types";

  export let form: ActionData;

</script>

<main class="logout-page">
  <h1 class="header">
    Log out complete
  </h1>

  <h3 class="header">
    Forgot something? Log back in
  </h3>
  <LoginCard {form} />

</main>

<style>
  .logout-page {
    height: 100vh;
    width:100vw;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: min-content min-content auto;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
    padding-top: 2em;
    background-color: #259;
  }
  .header {
    color: #F1F1F1;
    letter-spacing: -0.02rem;
    line-height: 1.2rem;
    text-align: center;
  }
</style>

