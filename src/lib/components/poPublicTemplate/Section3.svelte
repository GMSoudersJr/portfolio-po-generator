<script lang="ts">
	import {pdfTemplatePaymentMethodString} from "$lib/strings/poTemplate";
  import BankAccountLine from "./BankAccountLine.svelte";
	import BankAddressLine from "./BankAddressLine.svelte";
  import BankingInformation from "./BankingInformation.svelte";
	import BankNameLine from "./BankNameLine.svelte";
	import BeneficiaryNameLine from "./BeneficiaryNameLine.svelte";
	import PaymentDetailsWidget from "./PaymentDetailsWidget.svelte";
	import RoutingNumberLine from "./RoutingNumberLine.svelte";
	import SwiftCodeLine from "./SwiftCodeLine.svelte";

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
  <BeneficiaryNameLine {payeeName}/>
  <PaymentDetailsWidget
    label={pdfTemplatePaymentMethodString}
    value={paymentMethod}
  />
  <BankNameLine
    {bankName}
  />
  <BankAccountLine
    {bankAccountNumber}
    {iban}
  />
  <BankAddressLine {bankAddress}/>
  <RoutingNumberLine {routingNumber} />
  <SwiftCodeLine {swiftCode} />
</section>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    border: 2px solid black;
    row-gap: 0.3rem;
    padding: 0.1rem 0 1rem 0;
  }
</style>
