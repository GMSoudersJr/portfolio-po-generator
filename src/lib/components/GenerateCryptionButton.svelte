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
  📥 Download a New Cryption Key 🔐
</button>

<style>
  .cryption-key-button {
    padding: 12px 15px;
    font-size: 1rem;
  }
</style>
