<script lang="ts">
	import Toast from "$lib/components/Toast.svelte";

	import {deleteDB} from "$lib/indexedDb";
	import {onMount} from "svelte";
	import LogoutPage from "./LogoutPage.svelte";
  import { showToast } from "$lib/toasts";
  import { logoutSuccessString } from "$lib/strings/toasts";


  onMount(async() => {
    localStorage.clear();
    deleteDB();
    showToast(
      "success",
      "Success",
      logoutSuccessString
    );
  })
</script>

<Toast />
<LogoutPage />
