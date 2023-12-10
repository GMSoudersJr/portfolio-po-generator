<script lang="ts">
	import {goto} from "$app/navigation";
	import {clickToUndo, deletedPayeeTitle} from "$lib/strings/toasts";
  import { showToast, showToastUndoDelete } from "$lib/toasts";

  async function handleClick() {
    const response = await fetch(`/api/payees/delete/${payee_id}`, {
      method: 'DELETE',
    });
    const deletedPayee = await response.json();
    console.log(deletedPayee);

    if (deletedPayee) {
      goto('/payees/', {
        invalidateAll: true,
      });
      showToastUndoDelete(
        "success",
        deletedPayeeTitle,
        clickToUndo,
        deletedPayee
      );
    } else {
      showToast(
        "error",
        "Error",
        "Payee not deleted."
      );
    }
  };

  export let payee_id: string | undefined;
</script>

<button
  type="button"
  class="delete-payee"
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
