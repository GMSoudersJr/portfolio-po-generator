<script lang="ts">
  export let value: string;
  export let label: string;
  export let additionalValue = "";
</script>

<div class="grid-container">
  <div class="label-container">
    <h5 class="label section3-data-label">
      {label}:
    </h5>
  </div>
  <div class="value-container">
    <p class="value section3-data-actual">
      {#if additionalValue}
        {value} / {additionalValue}
      {:else}
        {value}
      {/if}
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1.618fr;
    grid-template-rows: 1fr;
    align-items: center;
    grid-template-areas:
    "label value";
  }
  .label-container {
    height: calc(210.975px / 6.472);
    grid-area: label;
    display: grid;
    align-items: center;
  }

  .value-container {
    grid-area: value;
    height: calc(210.975px / 6.472);
    background-color: #F2F2F2;
    border-radius: 8px;
    align-self: center;
    text-align: center;
    display: grid;
  }
  .value {
    align-self: center;
  }
</style>

