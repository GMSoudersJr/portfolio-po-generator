<script lang="ts">
	import type {Document} from "mongodb";

	import DeletePayeeButton from "./DeletePayeeButton.svelte";
	import GoBackButton from "./GoBackButton.svelte";
	import SubmitButton from "./SubmitButton.svelte";
  import UpdateButton from "./UpdateButton.svelte";

  export let purpose: string[] = ['create'];
  export let payeeData: Document | undefined;
  export let payee_id: string | undefined;
</script>

<div class="button-container">
{#if purpose.includes('update') || purpose.includes('delete')}
    <UpdateButton />
    <DeletePayeeButton
      {payee_id}
    />
  {:else if purpose.includes('create')}
    <SubmitButton />
  {:else}
    <GoBackButton />
{/if}
</div>

<style>
  .button-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 0.5rem;
  }
</style>

