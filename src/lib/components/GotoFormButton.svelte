<script lang="ts">
  import { goto } from "$app/navigation";

  async function handleClick() {
    await goto(pathUrl);
  }

  export let pathUrl: string;
</script>

<button
  class="add-form-button"
  on:click={handleClick}
>
+
</button>

<style>
  .add-form-button {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 700;
  }
  .add-form-button:hover {
    cursor: pointer;
    color: #FFF;
    background-color: #259259;
  }
</style>

