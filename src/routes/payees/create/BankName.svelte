<script lang="ts">
	import {bankName} from "$lib/strings/payeeForm";
  import { encryptTheData } from "$lib/cryption";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let key: CryptoKey;
  export let decryptedBankName: string;
  $: encryptedValue = "";
  $: value = decryptedBankName || "";
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

<label for={bankName.id}>
  {bankName.label}:
  <input
    class={bankName.class}
    type="text"
    id={bankName.id}
    on:input={handleInput}
    bind:value={value}
    required
  >
</label>
<input
    type="hidden"
    name={bankName.name}
    bind:value={encryptedValue}
>

<style>
</style>
