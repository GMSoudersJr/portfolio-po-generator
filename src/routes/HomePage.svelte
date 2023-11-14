<script lang="ts">
  import {
    cryptionBullets,
    navigationBullets,
    payeeFormBullets,
    pdfGenerationBullets,
    poFormBullets,
    navigationHeading,
    cryptionHeading,
    payeeFormHeading,
    poFormHeading,
    pdfGenerationHeading
  } from "$lib/strings/homepage";
</script>

<main class="home-page">
  <h1 class="header">
    Your Purchase Order Generator
  </h1>
  <p>
    Making something a little less dreadful.
  </p>
  <section>
    <h3>{navigationHeading}</h3>
    <ul>
      {#each navigationBullets as item}
      <li>
        {@html item}
      </li>
      {/each}
    </ul>
  </section>
  <section class="cryption-description">
    <h3>{cryptionHeading}</h3>
    <ul>
      {#each cryptionBullets as item}
      <li>
        {@html item}
      </li>
      {/each}
    </ul>

  </section>
  <section class="payee-form-description">
    <h3>{payeeFormHeading}</h3>
    <ul>
      {#each payeeFormBullets as item}
      <li>
        {@html item}
      </li>
      {/each}
    </ul>
  </section>
  <section class="po-form-description">
    <h3>{poFormHeading}</h3>
    <ul>
      {#each poFormBullets as item}
      <li>
        {@html item}
      </li>
      {/each}
    </ul>
  </section>
  <section>
    <h3>{pdfGenerationHeading}</h3>
    <ul>
      {#each pdfGenerationBullets as item}
      <li>
        {@html item}
      </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  .home-page {
    width: 100%;
    display: grid;
    grid-template-columns: 90vw;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
    padding: 2em 0;
  }
  li {
    line-height: 1.3rem;
  }
  .header {
    color: #259;
    letter-spacing: -0.02rem;
  }
  @media screen and (min-width: 480px) {
    .home-page {
      width: 600px;
      grid-template-columns: 600px;
      line-height: 1.2rem;
    }
  }
</style>

