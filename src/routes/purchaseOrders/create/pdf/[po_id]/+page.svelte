<script lang="ts">
  import PoTemplate from "$lib/components/poTemplate/PoTemplate.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  console.log(data.data);
</script>

<section id="pdf-template-container">
  <PoTemplate />
</section>

<style>
  .pdf-template-container {
    text-align: center;
  }
</style>

