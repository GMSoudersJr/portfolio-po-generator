<script lang="ts">
  import { routingNumber } from "$lib/strings/payeeForm";
  import { encryptTheData } from "$lib/cryption";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let key: CryptoKey;
  $: encryptedValue = "";
  async function handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      let encryptedData = await encryptTheData(key, target.value)
      let cipherText = encryptedData.cipherText;
      let iv = encryptedData.iv;

      const cipherTextArray = new Uint8Array(cipherText);
      const cipherTextString = cipherTextArray.toString();
      let ivString = iv.toString();
      let db_string = cipherTextString + "," + ivString;
      encryptedValue = db_string;
      dispatch("secretCreated", {
          encryptedValue
      });
  }
</script>

<label for={routingNumber.id}>
  {routingNumber.label}:
  {#each routingNumber.options as entry (entry.id)}
  <input
    class={routingNumber.class}
    type={routingNumber.type}
    id={routingNumber.id}
    on:input={handleInput}
  >
  {/each}
</label>
<input
    type="hidden"
    name={routingNumber.name}
    bind:value={encryptedValue}
>

<style>
</style>
