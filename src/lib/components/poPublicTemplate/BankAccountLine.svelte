<script lang="ts">
  import {
    pdfTemplateBankAccountNumberOrIbanString,
    pdfTemplateForMexicoAccountsString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let bankAccountNumber = "883244923348";
  export let iban = "RU0204452560040702810412345678901";
</script>

<div class="grid-container">
  <div class="bank-account-label required-line">
    <h5 class="bank-account-text section3-data-label">
      {pdfTemplateBankAccountNumberOrIbanString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="bank-account-actual section3-data-actual">
    {bankAccountNumber ?? ""}
  </p>
  <p class="iban-actual section3-data-actual">
    {iban ?? ""}
  </p>
</div>

<style>
  .iban-actual {
    grid-area: iban;
    padding-left: 0.15em;
    border-bottom: 1px solid black;
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
    grid-template-columns: 33% repeat(2, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
    "bankAccountLabel bankAccountActual iban";
    row-gap: 0.25em;
    margin: 0.25em 0;
  }
</style>
