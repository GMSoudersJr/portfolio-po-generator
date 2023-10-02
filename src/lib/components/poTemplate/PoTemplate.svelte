<script>
	import {section1, section2, section3} from "$lib/strings/poTemplate";
	import AdditionalNotes from "./AdditionalNotes.svelte";
  import ApprovedBy from "./ApprovedBy.svelte";
  import DueBy from "./DueBy.svelte";
  import Footer from "./Footer.svelte";
	import PaymentMethod from "./PaymentMethod.svelte";
	import PoNumber from "./PoNumber.svelte";
	import RequestedBy from "./RequestedBy.svelte";
	import Section1 from "./Section1.svelte";
	import Section2 from "./Section2.svelte";
	import Section3 from "./Section3.svelte";
	import Subtitle from "./Subtitle.svelte";
  import Title from "./Title.svelte";
</script>

<div class="page-container">

  <section class="title">
    <Title />
  </section>

  <section class="subtitle">
    <Subtitle />
  </section>

  <section class="payment-method">
    <PaymentMethod />
  </section>

  <section class="due-by">
    <DueBy />
  </section>

  <section class="po-number">
    <PoNumber />
  </section>

  <section class="section-1-label">
    {section1}
  </section>
  <section class="section1">
    <Section1 />
  </section>

  <section class="section-2-label">
    {section2}
  </section>
  <section class="section2">
    <Section2 />
  </section>

  <section class="section-3-label">
    {section3}
  </section>
  <section class="section3">
    <Section3 />
  </section>

  <section class="additional-notes">
    <AdditionalNotes />
  </section>

  <section class="requested-by">
    <RequestedBy />
  </section>

  <section class="approved-by">
    <ApprovedBy />
  </section>

  <section class="footer">
    <Footer />
  </section>

</div>

<style>
  .title {
    grid-area: title;
  }
  .subtitle {
    grid-area: subtitle;
  }
  .payment-method {
    grid-area: paymentMethod;
  }
  .due-by {
    grid-area: dueBy;
  }
  .po-number {
    grid-area: poNumber;
  }
  .section-1-label{
    grid-area: section1Label;
    font-size: var(--fontSizeSectionLabel);
  }
  .section1 {
    grid-area: section1;
  }
  .section-2-label{
    grid-area: section2Label;
    font-size: var(--fontSizeSectionLabel);
  }
  .section2 {
    grid-area: section2;
  }
  .section-3-label{
    grid-area: section3Label;
    font-size: var(--fontSizeSectionLabel);
  }
  .section3 {
    grid-area: section3;
  }
  .additional-notes {
    grid-area: additionalNotes;
  }
  .requested-by {
    grid-area: requestedBy;
  }
  .approved-by {
    grid-area: approvedBy;
  }
  .footer {
    grid-area: footer;
  }
  .page-container {
    width: 21cm;
    height: 29.7cm;
    display: grid;
    padding: 30px 45px;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(7, auto) repeat(5, 1fr);
    grid-template-areas:
    ". title"
    ". subtitle"
    ". paymentMethod"
    ". dueBy"
    ". poNumber"
    "section1Label section1"
    "section2Label section2"
    "section3Label section3"
    ". additionalNotes"
    ". requestedBy"
    ". approvedBy"
    "footer footer";
  }
  @page {
    size: 21cm 29.7cm;
    margin: 30mm 45mm 30mm 45mm;
  }
</style>
