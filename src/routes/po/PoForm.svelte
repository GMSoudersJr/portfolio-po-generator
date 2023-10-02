<script lang="ts">
	import ApprovedBy from "./ApprovedBy.svelte";
	import PnpLocation from "./PnpLocation.svelte";
	import ReportingBudgetLine from "./ReportingBudgetLine.svelte";
	import RequestedBy from "./RequestedBy.svelte";
	import TopicDivision from "./TopicDivision.svelte";
	import Currency from "./Currency.svelte";
	import PaymentMethod from "./PaymentMethod.svelte";
	import CreatedDate from "./CreatedDate.svelte";
	import DueDate from "./DueDate.svelte";
	import SubmitPoButton from "./SubmitPoButton.svelte";
</script>

<form
  method="post"
  action="?/add"
>
  <DueDate />
  <CreatedDate />
  <PaymentMethod />
  <Currency />
  <TopicDivision />
  <ReportingBudgetLine />
  <PnpLocation />
  <RequestedBy />
  <ApprovedBy />
  <SubmitPoButton />
</form>

<style>
  form {
    width: 30%;
  }
</style>
