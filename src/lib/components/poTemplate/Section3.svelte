<script lang="ts">
	import BankAccountLine from "./BankAccountLine.svelte";
	import BankAddressLine from "./BankAddressLine.svelte";
  import BankingInformation from "./BankingInformation.svelte";
	import BankNameLine from "./BankNameLine.svelte";
	import BeneficiaryNameLine from "./BeneficiaryNameLine.svelte";
	import RoutingNumberLine from "./RoutingNumberLine.svelte";

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
  <BankNameLine {bankName}/>
  <BankAccountLine
    {bankAccountNumber}
    {iban}
  />
  <BankAddressLine {bankAddress}/>
  <RoutingNumberLine
    {routingNumber}
    {swiftCode}
  />
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    border: 2px solid black;
  }
</style>
