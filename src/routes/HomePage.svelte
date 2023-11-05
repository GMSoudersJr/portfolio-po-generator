<script>

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
  <section class="cryption-description">
    <h3>Encryption / Decryption</h3>
    <ul>
      <li>
        You will need to click the "📥 a New Cryption Key 🔐" to generate
        your secret key. <strong>Hopefully</strong>, you will only need to do
        this once.
      </li>
      <li>
        Next, you will need to import the key so it can be used for encryption.
      </li>
      <li>
        Click on "📤 an Existing Cryption Key 🔐:" to select the file to
        import.
      </li>
      <li>
        The key is used to encrypt sensitive data before transmission to the
        database.
      </li>
      <li>
        The key is also used to decrypt that data when it is returned from the
        database.
      </li>
      <li>
        If you lose your key, there will be no way to get decrypt the
        data. Therefore, you will need to make a new one and make new payee
        entries.
      </li>

    </ul>

  </section>
  <section class="payee-form-description">
    <h3>Payee Form</h3>
    <ul>
      <li>
        If no "Cryption Key" is detected, you will be prompted to either
        download or import one.
      </li>
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
        If no "Cryption Key" is detected, you will be prompted to either
        download or import one.
      </li>
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
      <li>
        After submission, you will be redirected to the populated PO
      </li>
    </ul>
  </section>
  <section>
    <h3>PDF Generation</h3>
    <ul>
      <li>
        Review the PO
      </li>
      <li>
        Click the "PDF-it" button to download the pdf!
      </li>
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
