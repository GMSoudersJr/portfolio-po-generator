<script lang="ts">
  export let payeeName: string;
  export let payeeType: string;
</script>

<div class="payee-card">
  <h3 class="payee-name">
    {payeeName}
  </h3>
  <p class="payee-type">
    {payeeType}
  </p>
</div>


<style>
  .payee-card {
    border: 1px solid black;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
    "name"
    "payeeType";
    row-gap: 0.25rem;
    padding: 0.5rem;
  }
  .payee-name {
    grid-area: name;
  }
  .payee-type {
    grid-area: payeeType;
    color: #777;
  }
</style>

