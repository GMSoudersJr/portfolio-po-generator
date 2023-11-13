<script lang="ts">
  import {
    undoDeletePayeeHeader,
    undoDeletionQuestion,
  } from "$lib/strings/dialogs";
	import type {Document} from "mongodb";

	import UndoDeletePayeeButton from "./UndoDeletePayeeButton.svelte";
  export let payeeToUndelete: Document | undefined;

</script>

<dialog
  class="dialog key-dialog"
  id="undo-payee-deletion-dialog"
>
  <h1 class="greeting header">
    {undoDeletePayeeHeader}
  </h1>
  <div class="directions-container">
    <h3 class="header">{undoDeletionQuestion}</h3>
  </div>
  <div class="button-container">
    <UndoDeletePayeeButton {payeeToUndelete}/>
  </div>
</dialog>

<style>
  .key-dialog[open] {
    width: 694px;
    height: calc(694px / 1.618);
    left: calc(50% - 347px);
    top: calc(30% - 100px);
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: auto-fill;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    padding: 1rem 0;
  }
  .header {
    letter-spacing: -0.02rem;
  }
  ::backdrop {
    backdrop-filter: blur(5px);
  }
  li {
    line-height: 1.5;
  }
  ol > li:first-child {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
</style>
