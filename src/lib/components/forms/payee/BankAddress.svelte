<script lang="ts">
  import { bankAddress } from "$lib/strings/payeeForm";
  import { encryptTheData } from "$lib/cryption";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let decryptedBankAddress: string;
  export let key: CryptoKey;
  export let encryptedValue: string;
  export let disabled: boolean;
  $: value = decryptedBankAddress || "";
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

<label for={bankAddress.id}>
  {bankAddress.label}:
  <input
    type="text"
    id={bankAddress.id}
    class={bankAddress.class}
    bind:value={value}
    on:input={handleInput}
    {disabled}
  >
  </label>
<input
    type="hidden"
    name={bankAddress.name}
    bind:value={encryptedValue}
>

<style>
</style>
