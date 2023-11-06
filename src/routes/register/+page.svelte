<script lang="ts">
	import RegistrationForm from "./registrationForm.svelte";
	import type {ActionData, PageData} from './$types';
  export let data: PageData;
  export let form: ActionData;

</script>
<main class="registration-container">
  <h1 class="header"> Sign someone up!  </h1>
  <RegistrationForm />
  {#if form?.success}
    <p class="message success-message">{form.message}</p>
  {:else if form?.success == false}
    <p class="message fail-message">{form.message}</p>
  {/if}
</main>

<style>
  .registration-container {
    height: calc(100vh);
    width:100vw;
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: repeat(2, min-content);
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
  .message {
    text-align: center;
    color: #259259;
    font-size: 1rem;
    font-weight: 600;;
  }
</style>
