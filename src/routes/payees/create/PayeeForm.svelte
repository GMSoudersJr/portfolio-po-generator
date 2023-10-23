<script lang="ts">
  import BankAccountNumber from "./BankAccountNumber.svelte";
  import BankAddress from "./BankAddress.svelte";
  import BankName from "./BankName.svelte";
  import BeneficiaryName from "./BeneficiaryName.svelte";
	import Currency from "$lib/components/forms/Currency.svelte";
	import HomeAddress from "./HomeAddress.svelte";
	import NationalIdOrBusinessRegistration from "./NationalIDOrBusinessRegistration.svelte";
  import PayeeType from "./PayeeType.svelte";
	import RoutingNumber from "./RoutingNumber.svelte";
	import SubmitButton from "./SubmitButton.svelte";
	import SwiftCode from "./SwiftCode.svelte";
	import TopicDivision from "./TopicDivision.svelte";
	import ReportingBudgetLine from "./ReportingBudgetLine.svelte";
	import Iban from "./Iban.svelte";

  export let key: CryptoKey;
</script>

<form
  method="post"
  action="?/add"
>
  <BeneficiaryName />
  <PayeeType />
  <TopicDivision />
  <ReportingBudgetLine />
  <NationalIdOrBusinessRegistration {key}/>
  <Currency />
  <HomeAddress {key}/>
  <BankName {key}/>
  <BankAccountNumber {key}/>
  <Iban {key}/>
  <BankAddress {key}/>
  <RoutingNumber {key}/>
  <SwiftCode {key}/>
  <SubmitButton />
</form>


<style>
  form {
    width: 100%;
  }
</style>
