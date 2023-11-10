<script lang="ts">
	import {deleteDB} from "$lib/indexedDb";

	import {logoutLocalStorage, success} from "$lib/strings/alerts";

	import {onMount} from "svelte";
	import LogoutPage from "./LogoutPage.svelte";


onMount(async() => {
  localStorage.clear();
  alert(`${success}
        \n${logoutLocalStorage}`);
  deleteDB();
})
</script>

<LogoutPage />

<style>
</style>

