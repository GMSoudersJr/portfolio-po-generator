<script lang="ts">
	import {businessLocation} from "$lib/strings/poForm";

  import {
    pdfTemplateLocationString,
    pdfTemplateRequiredString
  } from "$lib/strings/poTemplate";

  export let location = "Korea";
</script>

<div class="grid-container">
  <div class="location-label required-line">
    <h5 class="location-text section1-data-label">
      {pdfTemplateLocationString}
    </h5>
    <p class="required warning">
      {pdfTemplateRequiredString}
    </p>
    <h5>:</h5>
  </div>
  <p class="location-actual section1-data-actual">
    {location ?? ""}
  </p>
</div>

<style>
  .location-label {
    display: flex;
    grid-area: locationLabel;
    padding-left: 0.15em;
  }
  .location-actual {
    grid-area: locationActual;
    border-bottom: 1px solid black;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 33% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
    "locationLabel locationActual";
    margin: 0.25em 0;
  }
</style>
