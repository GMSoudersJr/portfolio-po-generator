<script lang="ts">
	import {showToast} from "$lib/toasts";


  async function handlClick() {
    showToast(
      "success",
      "Form Submitted",
      "Adding to database..."
    )
  }
</script>

<input
  class="form-input"
  type="submit"
  name="submit"
  id="submitPayee"
  value="Submit"
  on:submit={handlClick}
>

<style>
  .form-input {
    background-color: #04AA6D;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 16px 32px;
    font-size: 1rem;
    align-self: stretch;
  }
</style>

