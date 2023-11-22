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
  <div class="section-title">
    <BankingInformation />
  </div>
  <div class="payee-name">
    <PaymentDetailsWidget
      label={pdfTemplateBeneficiaryNameString}
      value={payeeName}
    />
  </div>
  <div class="payment-method">
    <PaymentDetailsWidget
      label={pdfTemplatePaymentMethodString}
      value={paymentMethod}
    />
  </div>
  <div class="bank-name">
    <PaymentDetailsWidget
      label={pdfTemplateBankNameString}
      value={bankName}
    />
  </div>
  <div class="account-number-iban">
    <PaymentDetailsWidget
      label={pdfTemplateBankAccountNumberOrIbanString}
      value={bankAccountNumber}
      additionalValue={iban}
    />
  </div>
  <div class="bank-address">
    <PaymentDetailsWidget
      label={pdfTemplateBankAddressString}
      value={bankAddress}
    />
  </div>
  <div class="line-2">
    <PaymentDetailsWidget
      label="Line 2"
      value=""
    />
  </div>
  <div class="routing-number-aba">
    <PaymentDetailsWidget
      label={pdfTemplateRoutingOrABAString}
      value={routingNumber}
    />
  </div>
  <div class="swift-code">
    <PaymentDetailsWidget
      label={pdfTemplateSwiftString}
      value={swiftCode}
    />
  </div>
</section>

<style>
  .grid-container {
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);
    row-gap: 8px;
    column-gap: 21px;
    grid-template-areas:
    "title title"
    "payeeName bankAddress"
    "paymentMethod line2"
    "bankName swiftCode"
    "accountNumberIban routingNumberAba";
  }
  .section-title {
    grid-area: title;
  }
  .payee-name {
    grid-area: payeeName;
  }
  .payment-method {
    grid-area: paymentMethod;
  }
  .bank-name {
    grid-area: bankName;
  }
  .account-number-iban {
    grid-area: accountNumberIban;
  }
  .bank-address {
    grid-area: bankAddress;
  }
  .line-2 {
    grid-area: line2;
  }
  .routing-number-aba {
    grid-area: routingNumberAba;
  }
  .swift-code {
    grid-area: swiftCode;
  }
</style>
