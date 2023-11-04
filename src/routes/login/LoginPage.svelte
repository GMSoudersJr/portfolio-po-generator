<script lang="ts">
	import LoginCard from "$lib/components/LoginCard.svelte";
  import type { ActionData } from "../login/$types";
  export let form: ActionData;
</script>

<main class="login-page">
	<h1 class="header">Login please</h1>
	<LoginCard {form}/>
</main>

<style>
  .login-page {
    height: 100vh;
    width:100vw;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: auto 1fr;
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
