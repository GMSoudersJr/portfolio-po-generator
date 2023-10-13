<script lang="ts">
  import { jsPDF } from "jspdf";
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

    console.log("CLICKED TO MAKE A PDF", poPdf)

    if (poPdf) {
      doc.html(poPdf, {
        html2canvas: {
          scale: 0.25
        },
        callback: function (doc) {
          doc.save('firstPractice.pdf')
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
</style>
