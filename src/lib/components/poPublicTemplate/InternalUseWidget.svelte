<script lang="ts">
  export let label: string;
  export let value: string;
</script>

<div class="grid-container">
  <h5 class="label section1-data-label">
    {label}:
  </h5>
  <div class="value-container">
    <p class="value section1-data-actual">
      {value ?? ` `}
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    align-items: center;
    grid-template-areas:
    "label"
    "value";
    row-gap: 4px;
  }
  .label {
    grid-area: label;
    color: #919191;
  }
  .value-container {
    grid-area: value;
    background-color: #FFF;
    height: calc(221.225px / 8.09);
    border-radius: 8px;
    justify-self: fill;
    text-align: center;
    display: grid;
  }
  .value {
    place-self: center;
  }
</style>
