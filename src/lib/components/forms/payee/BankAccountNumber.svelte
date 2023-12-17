<script lang="ts">
  import { bankAccountNumber } from "$lib/strings/payeeForm";
  import { encryptTheData } from "$lib/cryption";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let decryptedBankAccountNumber: string;
  export let key: CryptoKey;
  export let encryptedValue: string;
  export let disabled: boolean;
  $: value = decryptedBankAccountNumber || "";
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

<label for={bankAccountNumber.id}>
  {bankAccountNumber.label}<span>*</span>:
  <input
    class={bankAccountNumber.class}
    type="text"
    id={bankAccountNumber.id}
    on:input={handleInput}
    bind:value={value}
    required
    {disabled}
  >
</label>
<input
    type="hidden"
    name={bankAccountNumber.name}
    bind:value={encryptedValue}
>

<style>
  span {
    color: var(--warningRed);
  }
</style>
