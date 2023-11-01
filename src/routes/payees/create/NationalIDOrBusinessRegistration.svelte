<script lang="ts">
  import { nationaIdOrBusinessRegistration } from "$lib/strings/payeeForm";
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

<label for={nationaIdOrBusinessRegistration.id}>
  {nationaIdOrBusinessRegistration.label}:
  <input
    class={nationaIdOrBusinessRegistration.class}
    type={nationaIdOrBusinessRegistration.type}
    id={nationaIdOrBusinessRegistration.id}
    on:input={handleInput}
  >
</label>
<input
    type="hidden"
    name={nationaIdOrBusinessRegistration.name}
    bind:value={encryptedValue}
>

<style>
</style>
