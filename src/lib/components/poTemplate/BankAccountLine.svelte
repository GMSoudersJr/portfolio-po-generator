<script>
  import {
    bankAccountNumberOrIban,
    forMexicoAccounts,
    required
  } from "$lib/strings/poTemplate";

  export let bankAcountNumberOfIbanActual = "883244923348";
</script>

<div class="grid-container">
  <div class="bank-account-label">
    <h5 class="bank-account-text section3-data-label">
      {bankAccountNumberOrIban}
    </h5>
    <p class="required warning">
      {required}:
    </p>
  </div>
  <p class="for-mexico-accounts warning">
    {forMexicoAccounts}
  </p>
  <p class="bank-account-actual section3-data-actual">
    {bankAcountNumberOfIbanActual}
  </p>
</div>

<style>
  .for-mexico-accounts {
    grid-area: forMexicoAccounts;
    padding-left: 0.15em;
  }
  .bank-account-label {
    display: flex;
    grid-area: bankAccountLabel;
    padding-left: 0.15em;
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
    row-gap: 0.25em;
    margin: 0.25em 0;
  }
</style>
