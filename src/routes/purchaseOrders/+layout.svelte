<script lang="ts">
	import InvalidKeyDialog from "$lib/components/InvalidKeyDialog.svelte";
  import KeyDialog from "$lib/components/KeyDialog.svelte";
	import Toast from "$lib/components/Toast.svelte";
</script>

<KeyDialog />
<InvalidKeyDialog />
<Toast />

<main>
  <slot />
</main>

<style>
</style>

