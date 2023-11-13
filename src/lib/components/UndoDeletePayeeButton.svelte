<script lang="ts">
	import {goto} from "$app/navigation";

	import {undoDeletePayee} from "$lib/db";

	import {undoButtonText} from "$lib/strings/dialogs";

	import type {Document} from "mongodb";

  async function handleClick() {
    if (payeeToUndelete) {
    }
  }

  export let payeeToUndelete: Document | undefined;
</script>

<button
  type="button"
  on:click={handleClick}
>
  {undoButtonText}
</button>

<style>
</style>
