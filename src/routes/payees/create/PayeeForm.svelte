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
	import SwiftCodeOrIbanNumber from "./SwiftCodeOrIbanNumber.svelte";
	import TopicDivision from "../../purchaseOrders/create/TopicDivision.svelte";
	import ReportingBudgetLine from "../../purchaseOrders/create/ReportingBudgetLine.svelte";
</script>

<form
  method="post"
  action="?/add"
>
  <BeneficiaryName />
  <PayeeType />
  <TopicDivision />
  <ReportingBudgetLine />
  <NationalIdOrBusinessRegistration />
  <Currency />
  <HomeAddress />
  <BankName />
  <BankAccountNumber />
  <BankAddress />
  <RoutingNumber />
  <SwiftCodeOrIbanNumber />
  <SubmitButton />
</form>


<style>
  form {
    width: 100%;
  }
</style>
