<script>
  import LoginCard from './LoginCard.svelte';
</script>

<main class="home-page">
  <h1 class="header">
    Your Purchase Order Generator
  </h1>
  <LoginCard />
</main>

<style>
  .home-page {
    height: 100vh;
    width:100vw;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: auto 1fr;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
    padding-top: 2em;
  }
  .header {
    color: #F1F1F1;
    letter-spacing: -0.02rem;
    line-height: 1.2rem;
  }
</style>
