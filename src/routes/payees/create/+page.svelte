<script lang="ts">
  import type { ActionData, PageData} from "./$types";
	import GenerateCryptionButton from "./GenerateCryptionButton.svelte";
	import ImportKey from "./ImportKey.svelte";
  import PayeeForm from "./PayeeForm.svelte";

  export let data: PageData;
  export let form: ActionData;
  let key: CryptoKey;

  async function handleImportKey(event: CustomEvent) {
    key = event.detail.importedKey;
  }
</script>

<main class="page-container">
  <div class="key-container">
    <GenerateCryptionButton />
    <ImportKey
      on:importedKey={handleImportKey}
    />
  </div>
  {#if key}
  <div class="form">
    {#if form?.success}
    <p class="form-success">{form.message}</p>
    {/if}
    <PayeeForm {key}/>
  </div>
  {/if}
</main>

<style>
  .key-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, min-content);
    row-gap: 1rem;
    grid-area: key;
    padding: 2rem;
  }
  .page-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(400px, 1fr) 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "key form .";
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
