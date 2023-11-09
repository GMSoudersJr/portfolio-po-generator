<script>
  import GenerateCryptionButton from "$lib/components/GenerateCryptionButton.svelte"
  import ImportKey from "$lib/components/ImportKey.svelte"
</script>

<section class="key-container">
  <GenerateCryptionButton />
  <ImportKey
    on:importedKey
  />
</section>

<style>
  .key-container {
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: repeat(2, auto);
    row-gap: 1.5rem;
  }
</style>
