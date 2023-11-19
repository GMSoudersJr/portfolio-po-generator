<script lang="ts">
  export let value: string;
  export let label: string;
  export let additionalValue = "";
</script>

<div class="grid-container">
  <h5 class="label section3-data-label">
    {label}:
  </h5>
  <p class="value section3-data-actual">
    {#if additionalValue}
      {value} / {additionalValue}
    {:else}
      {value}
    {/if}
  </p>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
    align-items: center;
    grid-template-areas:
    "label value";
    row-gap: 8px;
  }
  .label {
    grid-area: label;
  }
  .value {
    grid-area: value;
    background-color: #F2F2F2;
    padding: 5px 20px;
    border-radius: 12px;
    justify-self: fill;
    text-align: center;
  }
</style>

