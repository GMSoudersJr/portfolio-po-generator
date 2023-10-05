<script lang="ts">
  import type { ActionData, PageData} from "./$types";
  import PayeeForm from "./PayeeForm.svelte";

  export let data: PageData;
  export let form: ActionData;
</script>

<div class="page-container">
  <PayeeForm />
  {#if form?.success}
    <p class="form-success">{form.message}</p>
  {/if}
</div>

<style>
  .page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form-success {
    color: #04AA6D;
  }
</style>
