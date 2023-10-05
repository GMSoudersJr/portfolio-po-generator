<script>
	import CreatedDate from "./CreatedDate.svelte";
import DueDate from "./DueDate.svelte";
</script>

<section class="dates-section-container">
  <div class="due-date-container">
    <DueDate />
  </div>
  <div class="created-date-conatiner">
    <CreatedDate />
  </div>
</section>

<style>
  .dates-section-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    grid-template-areas:
    "dueDate createdDate";
    column-gap: 2em;;
  }
  .created-date-container {
    grid-area: createdDate;
  }
  .due-date-container {
    grid-area: dueDate;
  }
</style>

