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
  <h2 class="greeting header">
    {greeting}
  </h2>
  <div class="directions-container">
    <h4 class="header">
      {directionsHeading}
    </h4>
    <ul>
      {#each directions as direction}
        <li class="directions">
          { direction }
        </li>
      {/each}
    </ul>
  </div>
  <div class="steps">
    <h4 class="header">{stepsHeading}</h4>
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
    width: 550px;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    row-gap: 1.2rem;
    padding: 1rem 1.4rem;
  }
  h2 {
    line-height: 100%;
    color: #259;
  }
  .go-home {
    justify-self: end;
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
