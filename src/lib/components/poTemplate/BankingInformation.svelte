<script>
  import { bankingInformation, forWirePaymentsOnly } from "$lib/strings/poSheet";
</script>

<div class="grid-container">
  <div class="title">
    <p>
      {bankingInformation} {forWirePaymentsOnly}
    </p>
  </div>
</div>

<style>
  .title {
    grid-area: title;
    display: flex;

  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr 16.5%;
    grid-template-rows: auto;
    grid-template-areas:
    ". title title";

  }
</style>
