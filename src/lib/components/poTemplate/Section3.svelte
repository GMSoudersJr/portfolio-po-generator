<script>
	import BankAccountLine from "./BankAccountLine.svelte";
	import BankAddressLine from "./BankAddressLine.svelte";
  import BankingInformation from "./BankingInformation.svelte";
	import BankNameLine from "./BankNameLine.svelte";
	import BeneficiaryNameLine from "./BeneficiaryNameLine.svelte";
	import RoutingNumberLine from "./RoutingNumberLine.svelte";
</script>

<section class="grid-container">
  <BankingInformation />
  <BeneficiaryNameLine />
  <BankNameLine />
  <BankAccountLine />
  <BankAddressLine />
  <RoutingNumberLine />
</section>



<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    border: 2px solid black;
  }
</style>
