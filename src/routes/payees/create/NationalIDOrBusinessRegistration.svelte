<script lang="ts">
  import { nationaIdOrBusinessRegistration } from "$lib/strings/payeeForm";
  import { encryptTheData } from "$lib/cryption";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let disabled: boolean;
  export let decryptedNationalIdOrBusinessRegistrationNumber: string;
  export let encryptedValue: string;
  export let key: CryptoKey;
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
  $: value = decryptedNationalIdOrBusinessRegistrationNumber || "";
</script>

<label for={nationaIdOrBusinessRegistration.id}>
  {nationaIdOrBusinessRegistration.label}:
  <input
    class={nationaIdOrBusinessRegistration.class}
    type="text"
    id={nationaIdOrBusinessRegistration.id}
    bind:value={value}
    name="unencryptedNatIdBusReg"
    on:input={handleInput}
    {disabled}
  >
</label>
<input
    type="hidden"
    name={nationaIdOrBusinessRegistration.name}
    bind:value={encryptedValue}
>

<style>
</style>
