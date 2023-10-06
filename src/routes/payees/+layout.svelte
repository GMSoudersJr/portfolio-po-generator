<script lang="ts">
	import PayeeCards from "../purchaseOrders/create/PayeeCards.svelte";

 import type { LayoutData } from "./$types"; 
 export let data: LayoutData;

 $: ({payees} = data);
</script>

<PayeeCards {payees}/>
<slot />

<style>
</style>

