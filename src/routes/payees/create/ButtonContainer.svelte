<script lang="ts">
	import DeleteButton from "./DeleteButton.svelte";
	import SubmitButton from "./SubmitButton.svelte";
  import UpdateButton from "./UpdateButton.svelte";

  export let purpose: string[] = ['create'];
</script>

<div class="button-container">
{#if purpose.includes('update') || purpose.includes('delete')}
    <UpdateButton />
    <DeleteButton />
  {:else}
    <SubmitButton />
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

