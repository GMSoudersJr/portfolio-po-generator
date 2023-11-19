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
    font-size: 2rem;
    letter-spacing: var(--letterSpacingForAllCaps);
    padding: 15px;
    color: #4CBB17;
  }
  .title {
    border-radius: 12px;
  }
</style>
