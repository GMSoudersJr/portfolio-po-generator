<script>
	import BankAccountLine from "./BankAccountLine.svelte";
	import BankAddressLine from "./BankAddressLine.svelte";
  import BankingInformation from "./BankingInformation.svelte";
	import BankNameLine from "./BankNameLine.svelte";
	import BeneficiaryNameLine from "./BeneficiaryNameLine.svelte";
	import RoutingNumberLine from "./RoutingNumberLine.svelte";
</script>

<section class="grid-container">
  <div class="section-data-container">
    <BankingInformation />
    <BeneficiaryNameLine />
    <BankNameLine />
    <BankAccountLine />
    <BankAddressLine />
    <RoutingNumberLine />
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
