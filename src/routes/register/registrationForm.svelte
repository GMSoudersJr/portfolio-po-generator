<script lang="ts">
  import { enhance } from '$app/forms';

  let registering = false;


</script>

<div class="form-container">
  <form
    method="POST"
    action="?/register"
    use:enhance
  >
    <fieldset>
      <legend>Registration Form</legend>
      <br>
      <div>
        <label for="firstName">First Name</label>
        <input
          disabled={registering}
          id="firstName"
          type="text"
          name="firstName"
          required
        >
          <br>
          <br>
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
        >
          <br>
          <br>
      </div>
      <div>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          required
        >
          <br>
          <br>
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          required
        >
          <br>
          <br>
      </div>
      <div>
        <label for="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          required
        >
          <br>
          <br>
      </div>
      <div>
        <input
          type="submit"
          name="submit"
          value="Register">
          <br>
      </div>
    </fieldset>
  </form>
</div>

<style>
  .form-container {
    width: 350px;
  }
  input, select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  .message {
    text-align: center;
  }
  .fail-message {
    color: red;
  }
  .success-message {
    color: green;
  }
  fieldset {
    color: #F1F1F1;
  }
</style>


