<script lang="ts">
  import { SwiftCode } from "$lib/strings/payeeForm";
  import { encryptTheData } from "$lib/cryption";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let key: CryptoKey;
  $: encryptedValue = "";
  async function handleChange(event: Event) {
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

<label for={SwiftCode.id}>
  {SwiftCode.label}:
  <input
    class={SwiftCode.class}
    type={SwiftCode.type}
    id={SwiftCode.id}
    on:change={handleChange}
  >
</label>
<input
    type="hidden"
    name={SwiftCode.name}
    bind:value={encryptedValue}
>

<style>
</style>
