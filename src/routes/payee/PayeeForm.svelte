<script lang="ts">
  import BankAccountNumber from "./BankAccountNumber.svelte";
  import BankAddress from "./BankAddress.svelte";
  import BankName from "./BankName.svelte";
  import BeneficiaryName from "./BeneficiaryName.svelte";
	import HomeAddress from "./HomeAddress.svelte";
	import NationalIdOrBusinessRegistration from "./NationalIDOrBusinessRegistration.svelte";
  import PayeeType from "./PayeeType.svelte";
	import RoutingNumber from "./RoutingNumber.svelte";
	import SubmitButton from "./SubmitButton.svelte";
	import SwiftCodeOrIbanNumber from "./SwiftCodeOrIbanNumber.svelte";
</script>

<form
  method="post"
  action="?/add"
>
  <BeneficiaryName />
  <PayeeType />
  <NationalIdOrBusinessRegistration />
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
    width: 30%;
  }
</style>
