<script lang="ts">
	import AddressLine from "./AddressLine.svelte";
	import DateLine from "./DateLine.svelte";
	import PayableToLine from "./PayableToLine.svelte";
	import PnpLocationLine from "./PnpLocationLine.svelte";
	import ReportingBudgetLineLine from "./ReportingBudgetLineLine.svelte";
	import TopicDivisionLine from "./TopicDivisionLine.svelte";

  export let createdDate = "";
  export let topicDivision = "";
  export let reportingBudgetLine = "";
  export let pnpLocation = "";
  export let payeeName = ""
  export let homeAddress = "";
</script>

<section class="grid-container">
  <DateLine {createdDate}/>
  <TopicDivisionLine {topicDivision}/>
  <ReportingBudgetLineLine {reportingBudgetLine}/>
  <PnpLocationLine {pnpLocation}/>
  <PayableToLine {payeeName}/>
  <AddressLine {homeAddress}/>
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    border: 2px solid black;
  }
</style>

