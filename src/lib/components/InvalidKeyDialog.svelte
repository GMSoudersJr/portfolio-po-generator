<script lang="ts">
  import {
	  stepsHeading,
	  invalidKeyDirectionsHeading,
	  invalidKeyDirections,
	  invalidKeyGreeting,
  } from "$lib/strings/dialogs";

	import GenerateCryptionButton from "./GenerateCryptionButton.svelte";
	import ImportKey from "./ImportKey.svelte";

</script>

<dialog
  class="dialog invalid-key-dialog"
  id="invalid-key-dialog"
>
  <h2 class="greeting header">
    {invalidKeyGreeting}
  </h2>
  <div class="directions-container">
  <h4 class="header">{invalidKeyDirectionsHeading}</h4>
    <ul>
      {#each invalidKeyDirections as direction}
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
  <div class="navigation-container">
    <div class="go-home">
      <a href="/">Back to Home</a>
    </div>
    <div class="go-payees">
      <a href="/payees/">Back to Payees</a>
    </div>
  </div>
</dialog>

<style>
  .invalid-key-dialog[open] {
    width: 694px;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    row-gap: 1.2rem;
    padding: 1rem 2rem;
  }
  h2 {
    line-height: 100%;
  }
  .navigation-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 1fr;
    justify-content: end;
    align-items: baseline;
    column-gap: 2rem;
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
    padding-bottom: 0.5rem;
  }
</style>
