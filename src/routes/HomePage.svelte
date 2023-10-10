<script>
	import GotoFormButton from "$lib/components/GotoFormButton.svelte";

</script>

<main class="home-page">
  <h1 class="header">
    Your Purchase Order Generator
  </h1>
  <p>
    This app was designed to make your life easier.  Here's how it goes:
  </p>
  <ul>
    <li>
      The navbar choices navigate you to a page that shows all entries for that
      collection.
    </li>
    <li>
      To add new <strong><em>Payees</em></strong> and
      <em><strong>Purchase Orders</strong></em> click a button
      that looks like this:
    </li>
    <GotoFormButton pathUrl="/" /><sub>this one does not do anything</sub>
  </ul>
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
        Some fields will be encrypted, so it may take a few seconds for the
        process to finish. Therefore, please be patient
      </li>
      <li>
        <strong>Do not click the submit button more than once!</strong>
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
        Payee Name will search through the available Payee
        cards. <strong>Click the card of the Payee you want!</strong>
      </li>
      <li>
        <strong>YOU NEED TO CLICK A CARD</strong> for its data to populate the
        form! (<em>Currency</em>, <em>Topic / Division</em>, and
        <em>Reporting / Budget Line</em>)
      </li>
      <li>
        <em>Subtotal</em> and <em>Tax Rate</em> are disabled. You cannot update
        them!
      </li>
      <li>
        <em>Due Date</em> and <em>Created Date</em> will be formatted
        server-side. You do not need to worry about them.
      </li>
      <li>
        <em>PO#</em> will be formatted and generated automatically with your
        summary input.  It is <strong><em>customizable</em></strong>, though.
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
</style>
