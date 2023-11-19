<script lang="ts">
  import {
    pdfTemplateBankAccountNumberOrIbanString,
    pdfTemplateBankAddressString,
    pdfTemplateBankNameString,
    pdfTemplateBeneficiaryNameString,
    pdfTemplatePaymentMethodString,
    pdfTemplateRoutingOrABAString,
    pdfTemplateSwiftString
  } from "$lib/strings/poTemplate";
  import BankingInformation from "./BankingInformation.svelte";
	import PaymentDetailsWidget from "./PaymentDetailsWidget.svelte";

  export let paymentMethod = "";
  export let payeeName = "";
  export let bankName = "";
  export let bankAccountNumber = "";
  export let iban = "";
  export let bankAddress = "";
  export let routingNumber = "";
  export let swiftCode = "";

</script>

<section class="grid-container">
  <BankingInformation />
  <PaymentDetailsWidget
    label={pdfTemplateBeneficiaryNameString}
    value={payeeName}
  />
  <PaymentDetailsWidget
    label={pdfTemplatePaymentMethodString}
    value={paymentMethod}
  />
  <PaymentDetailsWidget
    label={pdfTemplateBankNameString}
    value={bankName}
  />
  <PaymentDetailsWidget
    label={pdfTemplateBankAccountNumberOrIbanString}
    value={bankAccountNumber}
    additionalValue={iban}
  />
  {#if  bankAddress}
  <PaymentDetailsWidget
    label={pdfTemplateBankAddressString}
    value={bankAddress}
  />
  {/if}
  {#if routingNumber}
  <PaymentDetailsWidget
    label={pdfTemplateRoutingOrABAString}
    value={routingNumber}
  />
  {/if}
  {#if swiftCode}
  <PaymentDetailsWidget
    label={pdfTemplateSwiftString}
    value={swiftCode}
  />
  {/if}
</section>

<style>
  .grid-container {
    border-radius: 12px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    row-gap: 0.75rem;
    padding: 0.5rem;
  }
</style>
