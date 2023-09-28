<script>
  import { paymentMethod } from "$lib/strings/poSheet";
  
  export let actualPaymentMethod = "Wire";
</script>

<p>
  {paymentMethod}: {actualPaymentMethod}
</p>

<style>
  p{
    text-align: end;
  }
</style>
