<script lang="ts">
  import {
    greeting,
    directions,
	  directionsHeading,
	  stepsHeading,
  } from "$lib/strings/dialogs";

	import GenerateCryptionButton from "./GenerateCryptionButton.svelte";
	import ImportKey from "./ImportKey.svelte";

</script>

<dialog
  class="key-dialog"
  id="key-dialog"
>
  <h1 class="greeting header">
    {greeting}
  </h1>
  <div class="directions-container">
  <h3 class="header">{directionsHeading}</h3>
    <ul>
      {#each directions as direction}
        <li class="directions">
          { direction }
        </li>
      {/each}
    </ul>
  </div>
  <div class="steps">
    <h3 class="header">{stepsHeading}</h3>
    <ol>
      <li>
        <GenerateCryptionButton />
      </li>
      <li>
        <ImportKey  on:importedKey/>
      </li>
    </ol>
  </div>
  <div class="go-home">
    <a href="/">Back to Home</a>
  </div>
</dialog>

<style>
  .key-dialog[open] {
    width: 694px;
    height: calc(694px / 1.618);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: auto-fill;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    padding: 1rem 0;
  }
  .header {
    letter-spacing: -0.02rem;
  }
  ::backdrop {
    backdrop-filter: blur(5px);
  }
  li {
    line-height: 1.5;
  }
  ol > li:first-child {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
</style>
