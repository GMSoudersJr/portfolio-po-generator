<script lang="ts">
  export let label: string;
  export let value: string;
</script>

<div class="grid-container">
  <h5 class="label section1-data-label">
    {label}:
  </h5>
  <p class="value section1-data-actual">
    {value ?? ` `}
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
    background-color: #FFF;
    padding: 5px 20px;
    border-radius: 12px;
    justify-self: fill;
    text-align: center;
  }
</style>
