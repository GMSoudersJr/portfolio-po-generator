<script lang="ts">
  import { jsPDF } from "jspdf";

  export let fileName = "practice.pdf";

  function handleClick() {
    let doc = new jsPDF(
      {
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      }
    );

    //let poPdf = document.querySelector('#pdf-tempate-container')
    let poPdf = document.getElementById('pdfTemplate')

    if (poPdf) {
      doc.html(poPdf, {
        html2canvas: {
          scale: 0.25
        },
        callback: function (doc) {
          doc.save(fileName)
        }
      });
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
    background-color: #259259;
    position: fixed;
    z-index: 1;
    right: 1.5rem;
    top: 5rem;
    padding: 12px;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
  }

  .pdf-button:hover {
    cursor: pointer;
    color: #FFF

  }
</style>
