<script lang="ts">
  import { homeAddress } from "$lib/strings/payeeForm";
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

<label for={homeAddress.id}>
  {homeAddress.label}:
  <input
    type={homeAddress.type}
    id={homeAddress.id}
    class={homeAddress.class}
    on:input={handleInput}
  >
</label>
<input
    type="hidden"
    name={homeAddress.name}
    bind:value={encryptedValue}
>

<style>
</style>
