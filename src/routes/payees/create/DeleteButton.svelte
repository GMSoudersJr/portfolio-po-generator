<script lang="ts">
	import {clickToUndo, deletedPayeeTitle} from "$lib/strings/toasts";
  import { showToastUndoDelete } from "$lib/utils";
	import type {Document} from "mongodb";

  function handleClick() {
    showToastUndoDelete(
      "success",
      deletedPayeeTitle,
      clickToUndo,
      payeeData
    );
  };

  export let payeeData: Document | undefined;
</script>

<button
  class="delete-payee"
  formaction="?/delete"
  on:click={handleClick}
>
  Delete
</button>

<style>
  .delete-payee {
    background-color: #AA0441;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 16px 32px;
    font-size: 1rem;
  }
</style>

