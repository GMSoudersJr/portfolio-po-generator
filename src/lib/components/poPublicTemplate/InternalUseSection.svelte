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
  <div class="title">
    <InternalInformation />
  </div>

  <div class="created-on">
    <InternalUseWidget
      label={pdfTemplateDateString}
      value={createdDate}
    />
  </div>

  <div class="topic-division">
    <InternalUseWidget
      label={pdfTemplateTopicDivisionString}
      value={topicDivision}
    />
  </div>

  <div class="reporting-budget-line">
    <InternalUseWidget
      label={pdfTemplateReportingBudgetLineString}
      value={reportingBudgetLine}
    />
  </div>

  <div class="location">
    <InternalUseWidget
      label={pdfTemplateLocationString}
      value={location}
    />
  </div>

  <div class="payee-name">
    <InternalUseWidget
      label={pdfTemplateBeneficiaryNameString}
      value={payeeName}
    />
  </div>

  <div class="home-address">
    <InternalUseWidget
      label={pdfTemplateAddressString}
      value={homeAddress}
    />
  </div>
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, min-content);
    row-gap: 8px;
    column-gap: 20px;
    padding: 12px 56px 0 56px;
    grid-template-areas:
    "title title title"
    "createdOn topicDivision reportingBudgetLine"
    "location payeeName address";
  }
  .title {
    grid-area: title;
  }
  .created-on {
    grid-area: createdOn;
  }
  .topic-division {
    grid-area: topicDivision;
  }
  .reporting-budget-line {
    grid-area: reportingBudgetLine;
  }
  .location {
    grid-area: location;
  }
  .payee-name{
    grid-area: payeeName;
  }
  .home-address {
    grid-area: address;
  }
</style>

