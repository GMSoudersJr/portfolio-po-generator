<script lang="ts">
  export let value: string;
  export let label: string;
</script>


<div class="grid-container">
  <div class="label-container">
    <h5 class="label">
      {label}:
    </h5>
  </div>

  <div class="value-container">
    <p class="value">
      {value ?? ""}
    </p>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    row-gap: 8px;
    grid-template-areas:
    "label"
    "value";
  }
  .label {
    grid-area: label;
    color: var(--kellyGreen);
    font-size: var(--fontSizeRequestedBy);
    letter-spacing: var(--letterSpacingForAllCaps);
    font-size: 12px;
  }
  .value-container {
    background-color: #F1F1F1;
    height: calc(341.85px / 6.472);
    border-radius: 8px;
    justify-self: stretch;
    font-size: var(--fontSizeSectionDataActual);
    grid-area: value;
    font-size: var(--fontSizeRequestedBy);
    display: grid;
    align-items: center;
  }
  .value {
    justify-self: center;
  }
</style>
