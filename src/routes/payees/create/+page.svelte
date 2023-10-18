<script lang="ts">
	import {onMount} from "svelte";

  import type { ActionData, PageData} from "./$types";
  import PayeeForm from "./PayeeForm.svelte";

  export let data: PageData;
  export let form: ActionData;
</script>

<main class="page-container">
  <div class="form">
    {#if form?.success}
    <p class="form-success">{form.message}</p>
    {/if}
    <PayeeForm />
  </div>
</main>

<style>
  .page-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(400px, 1fr) 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    ". form .";
  }
  .form {
    grid-area: form;
    padding: 2rem 0;
  }
  .form-success {
    color: #04AA6D;
    text-align: center;
    padding-bottom: 0.5rem;
  }
</style>
