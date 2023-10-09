<script lang="ts">
  import { changeToPascalCase, formatPoNumberDateString, getInitials, updateArrayOfNumbers } from "$lib/utils";
	import type { PageData } from "./$types";
	import PayeeCards from "./PayeeCards.svelte";
	import PoForm from "./PoForm.svelte";
	import type {PoFormPoNumber} from "$lib/classes";
	import {dueDate, requestedBy, topicDivision} from "$lib/strings/poForm";

  export let data: PageData;

  $: ({ payees } = data);

  $: clickedPayeeName = "";
  $: clickedPayeeTaxRate = 0;
  $: clickedPayee_id = "";
  $: clickedPayeeCurrency = "";
  $: clickedPayeeTopicDivision = "";
  $: clickedPayeeReportingBudgetLine = "";

  const poFormPoNumber: PoFormPoNumber = {
    dueDate: formatPoNumberDateString(dueDate.value),
    summary: "",
    topicDivision: changeToPascalCase(topicDivision.options.at(0)?.value),
    requesterInitials: getInitials(requestedBy.options.at(0)?.value)
  };

  function handleSearch(event: CustomEvent) {
    const query = event.detail.query.toLowerCase();
    payees?.forEach(payee => {
      const shouldBeShown = payee.beneficiaryName.toLowerCase().includes(query);
      payee.shouldBeShown = shouldBeShown;
    });
    payees = payees;
  }

  function handleClickedPayee(event: CustomEvent) {
    const payeeName = event.detail.payee.beneficiaryName;
    const _id = event.detail.payee._id;
    const taxRate = event.detail.payee.taxRate;
    const currency = event.detail.payee.currency;
    const payeeTopicDivision = event.detail.payee.topicDivision;
    const reportingBudgetLine = event.detail.payee.reportingBudgetLine;
    clickedPayeeName = payeeName;
    clickedPayee_id = _id;
    clickedPayeeTaxRate = taxRate;
    clickedPayeeCurrency = currency;
    clickedPayeeTopicDivision = payeeTopicDivision;
    clickedPayeeReportingBudgetLine = reportingBudgetLine;

    poFormPoNumber.topicDivision = changeToPascalCase(payeeTopicDivision);

    payees?.forEach(payee => {
    const shouldBeShown = payee.beneficiaryName.toLowerCase().includes(payeeName.toLowerCase());
      payee.shouldBeShown = shouldBeShown;
    });
    payees = payees;
  }


</script>

<div class="page-grid-container">
  <div class="available-payees">
    <PayeeCards
      on:clickedPayee={handleClickedPayee}
      {payees}
    />
  </div>
  <div class="po-form">
    <PoForm
      on:searching={handleSearch}
      {clickedPayeeName}
      {clickedPayee_id}
      {clickedPayeeTaxRate}
      {clickedPayeeCurrency}
      {clickedPayeeTopicDivision}
      {clickedPayeeReportingBudgetLine}
      {poFormPoNumber}
    />
  </div>
</div>

<style>
  .page-grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "availablePayees poForm .";
    column-gap: 1rem;
  }
  .available-payees {
    grid-area: availablePayees;
  }
  .po-form {
    grid-area: poForm;
  }
</style>
