<script lang="ts">
  import * as pdfMake from "pdfmake/build/pdfmake";
  import html2canvas from "html2canvas";
	import type {TDocumentDefinitions} from "pdfmake/interfaces";

  export let fileName: string | undefined;

  async function handleClick() {
    const poPdf = document.getElementById('pdfTemplate');
    if (poPdf) {
      const canvas = await html2canvas(poPdf, {
        scale: 2
      });
      const data = canvas.toDataURL();
      const docDefinition: TDocumentDefinitions = {
        pageSize: 'A4',
        pageOrientation: 'portrait',
        pageMargins: [0, 0, 0, 0],
        content: [{
          image: data,
          width: 595,
        }]
      };
      pdfMake.createPdf(docDefinition).download(`${fileName}`);
    }

  }
</script>

<button
  class="pdf-button"
  type="button"
  id="pdf-button"
  on:click={handleClick}
>
  PDF-it
</button>

<style>
  .pdf-button {
    background-color: var(--kellyGreen);
    position: fixed;
    z-index: 1;
    right: 1.5rem;
    top: 7rem;
    padding: 12px;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
  }

  .pdf-button:hover {
    cursor: pointer;
    color: #FFF

  }
</style>
