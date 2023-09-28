<script>
	import AddressLine from "./AddressLine.svelte";
	import DateLine from "./DateLine.svelte";
	import PayableToLine from "./PayableToLine.svelte";
	import PnpLocationLine from "./PnpLocationLine.svelte";
	import ReportingBudgetLineLine from "./ReportingBudgetLineLine.svelte";
	import TopicDivisionLine from "./TopicDivisionLine.svelte";
</script>

<section class="grid-container">
  <div class="section-data-container">
    <DateLine />
    <TopicDivisionLine />
    <ReportingBudgetLineLine />
    <PnpLocationLine />
    <PayableToLine />
    <AddressLine />
  </div>
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
  }
  .section-data-container {
    border: 2px solid black;
  }
</style>

