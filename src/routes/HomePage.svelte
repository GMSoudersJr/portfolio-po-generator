<script>
	import GotoFormButton from "$lib/components/GotoFormButton.svelte";

</script>

<main class="home-page">
  <h1 class="header">
    Your Purchase Order Generator
  </h1>
  <p>
    Making something a little less dreadful.
  </p>
  <section>
    <h3>Navigation</h3>
    <ul>
      <li>
        The navbar navigates you to a page that shows all entries for that
        selection.
      </li>
      <li>
        To add new <strong><em>Payees</em></strong> and
        <em><strong>Purchase Orders</strong></em> click the "+" button
      </li>
    </ul>
  </section>
  <section class="payee-form-description">
    <h3>Payee Form</h3>
    <ul>
      <li>
        The fields you asked for are required.
      </li>
      <li>
        A form <strong>cannot </strong>be submitted without all required fields.
      </li>
      <li>
        Some fields will be encrypted, so it will take a few seconds for the
        process to finish. Therefore, please <em>be patient.</em>
      </li>
      <li>
        <strong>Do not click the Submit button more than once!</strong>
      </li>
      <li>
        The form will reset upon successful submission.
      </li>
      <li>
        After submitting payees, navigate to Purchase Orders!
      </li>
    </ul>
  </section>
  <section class="po-form-description">
    <h3>Purchase Order Form</h3>
    <ul>
      <li>
        There is a grid of cards showing all payees to the right of the form.
      </li>
      <li>
        <strong>Payee Name</strong> is a search input. It will filter the payee cards.
      </li>
      <ul>
        <li>
          There is an "X" that will clear the field. Backspace will also work.
        </li>
      </ul>
      <li>
        <strong>YOU NEED TO CLICK A CARD</strong> for its data to auto-populate:
        <ul>
          <li>
            <strong>Currency</strong> - <em>customizable</em>
          </li>
          <li>
            <strong>Topic / Division</strong> - <em>customizable</em>
          </li>
          <li>
            <strong>Reporting / Budget Line</strong> - <em>customizable</em>
          </li>
        </ul>
      </li>
      <li>
        <strong>Subtotal</strong> and <strong>Tax Rate</strong> are <em>disabled</em>.
        You cannot update them!
      </li>
      <li>
        <strong>Due Date</strong> and <strong>Created Date</strong> will be formatted
        server-side.
      </li>
      <li>
        <strong>PO#</strong> will be formatted and generated automatically with your
        summary input.  It is <em>customizable</em>, though.
      </li>
    </ul>
  </section>
  <section>
    <h3>PDF Generation</h3>
    <ul>
      <li>
        TBD
      </li>
    </ul>
  </section>
</main>

<style>
  .home-page {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 600px;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
    padding-top: 2em;
  }
  .header {
    color: #259;
    letter-spacing: -0.02rem;
    line-height: 1.2rem;
  }
  section {
    background: linear-gradient(90deg, #F1F1F1 70%, #FFF, #F1F1F1);
  }
</style>
