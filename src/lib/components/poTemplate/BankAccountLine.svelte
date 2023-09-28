<script>
  import {
    bankAccountNumberOrIban,
    forMexicoAccounts,
    required
  } from "$lib/strings/poSheet";

  export let bankAcountNumberOfIbanActual = "883244923348";
</script>

<div class="grid-container">
  <div class="bank-account-label item-a">
    <h5 class="bank-account-text item-a">
      {bankAccountNumberOrIban}
    </h5>
    <p class="required">
      {required}:
    </p>
  </div>
  <p class="for-mexico-accounts">
    {forMexicoAccounts}
  </p>
  <p class="bank-account-actual">
    {bankAcountNumberOfIbanActual}
  </p>
</div>

<style>
  .for-mexico-accounts {
    grid-area: forMexicoAccounts;
  }
  .bank-account-label {
    display: flex;
    grid-area: bankAccountLabel;
  }
  .bank-account-actual {
    grid-area: bankAccountActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
    "bankAccountLabel bankAccountActual"
    "forMexicoAccounts .";
  }
</style>
