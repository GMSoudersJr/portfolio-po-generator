<script>
  export let description = "";
  export let price = 0;
</script>

<div class="grid-container">
  <div class="description">
    <p>
      {description}
    </p>
  </div>
  <p class="amount">
    {price}
  </p>
</div>

<style>
  .description {
    grid-area: description;
    border-right: 1px solid black;
    display: flex;
  }
  .amount {
    grid-area: amount;
    justify-self: end;
  }
  .grid-container {
    border-top: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 16.5%;
    grid-template-rows: auto;
    grid-template-areas:
    "description amount";
  }

</style>
