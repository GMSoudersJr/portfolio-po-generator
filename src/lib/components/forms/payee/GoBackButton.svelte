<script lang="ts">
	import {goto} from "$app/navigation";

  async function handleClick() {
    await goto('/payees/')
  }
</script>

<button
  class="form-input"
  type="button"
  on:click={handleClick}
>
  Go back to Payees
</button>

<style>
  .form-input {
    background-color: #04AA6D;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 16px 32px;
    font-size: 1rem;
    align-self: stretch;
  }
</style>
