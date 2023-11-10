<script lang="ts">
  import { iban } from "$lib/strings/payeeForm";
  import { encryptTheData } from "$lib/cryption";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let decryptedIban: string;
  export let key: CryptoKey;
  $: encryptedValue = "";
  $: value = decryptedIban || "";
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

<label for={iban.id}>
  {iban.label}:
  <input
    class={iban.class}
    type="text"
    id={iban.id}
    bind:value={value}
    on:input={handleInput}
  >
</label>
<input
    type="hidden"
    name={iban.name}
    bind:value={encryptedValue}
>

<style>
</style>
