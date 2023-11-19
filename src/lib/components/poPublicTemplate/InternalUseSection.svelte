<script lang="ts">
	import InternalInformation from "./InternalInformation.svelte";
	import InternalUseWidget from "./InternalUseWidget.svelte";
	import {pdfTemplateAddressString, pdfTemplateBeneficiaryNameString, pdfTemplateDateString, pdfTemplateLocationString, pdfTemplateReportingBudgetLineString, pdfTemplateTopicDivisionString} from "$lib/strings/poTemplate";

  export let createdDate = "";
  export let topicDivision = "";
  export let reportingBudgetLine = "";
  export let location = "";
  export let payeeName = ""
  export let homeAddress = "";
</script>

<section class="grid-container">
  <InternalInformation />
  <InternalUseWidget
    label={pdfTemplateDateString}
    value={createdDate}
  />
  <InternalUseWidget
    label={pdfTemplateTopicDivisionString}
    value={topicDivision}
  />
  <InternalUseWidget
    label={pdfTemplateReportingBudgetLineString}
    value={reportingBudgetLine}
  />
  <InternalUseWidget
    label={pdfTemplateLocationString}
    value={location}
  />
  <InternalUseWidget
    label={pdfTemplateBeneficiaryNameString}
    value={payeeName}
  />
  {#if homeAddress}
    <InternalUseWidget
      label={pdfTemplateAddressString}
      value={homeAddress}
    />
  {/if}
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(auto-fill, 1fr);
    border-radius: 12px;
    row-gap: 0.75rem;
    padding: 0.5rem;
    background-color: #F1F1F1;
  }
</style>

