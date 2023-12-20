<script lang="ts">
	import LoginCard from "$lib/components/LoginCard.svelte";
  import type { ActionData } from "./login/$types";
  export let form: ActionData;
</script>

<main class="login-page">
  <h1 class="header">
    Gerald's Purchase Order Generator
  </h1>
	<LoginCard {form}/>
</main>

<style>
  .login-page {
    height: 100vh;
    width:100%;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: auto 1fr;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
    padding-top: 2em;
    background-image: linear-gradient(0deg, var(--kellyGreen), var(--tangerineYellow), var(--brown));
  }
  .header {
    width: 400px;
    color: #F1F1F1;
    letter-spacing: -0.02rem;
    text-align: center;
  }
</style>
