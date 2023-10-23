<script lang="ts">
  async function handleClick() {
    window.location.href = `/api/generateKey`
  }
</script>

<button
  type="button"
  class="cryption-key-button"
  on:click={handleClick}
>
  Download a New Cryption Key!
</button>

<style>
  .cryption-key-button {
    width: 100%;
    padding: 12px 15px;
  }
</style>
