<script lang="ts">
	import InvalidKeyDialog from "$lib/components/InvalidKeyDialog.svelte";
  import KeyDialog from "$lib/components/KeyDialog.svelte";
</script>

<KeyDialog />
<InvalidKeyDialog />

<main>
  <slot />
</main>

<style>
</style>

