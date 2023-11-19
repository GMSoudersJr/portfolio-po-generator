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

  <p class="value">
    {value ?? ""}
  </p>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    align-items: center;
    grid-template-areas:
    "label"
    "value";
  }
  .label {
    grid-area: label;
    font-size: var(--fontSizeRequestedBy);
    letter-spacing: var(--letterSpacingForAllCaps);
    padding: 5px 0;
    font-size: 12px;
  }
  .value {
    background-color: #F1F1F1;
    border-radius: 12px;
    justify-self: stretch;
    text-align: center;
    padding: 1.5em;
    font-size: var(--fontSizeSectionDataActual);
    grid-area: value;
    font-size: var(--fontSizeRequestedBy);
  }
</style>
