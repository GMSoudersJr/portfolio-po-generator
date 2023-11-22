<script lang="ts">
  import { pdfTemplateTitleString } from '$lib/strings/poTemplate'
</script>

<section class="title">
  <h1 class="text">
    {pdfTemplateTitleString}
  </h1>
</section>


<style>
  .text {
    text-align: center;
    font-weight: 900;
    font-size: var(--fontSizePoTitle);
    font-size: 1.5rem;
    letter-spacing: var(--letterSpacingForAllCaps);
    color: #4CBB17;
  }
</style>
