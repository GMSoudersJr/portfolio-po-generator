<script>
</script>

<form
  class="login-form"
  action="login"
>
  <label for="login-username">
    Username:
    <input type="text" name="username" id="login-username">
  </label>
  <label for="login-password">
    Password:
    <input type="password" name="password" id="login-password">
  </label>
  <input type="submit" name="login-submit" id="login-submit" value="Login">
</form>

<style>
  .login-form {
    width: min-content;
    height: min-content;
    border: 3px solid #F1F1F1;
    border-radius: 5px;
    display: grid;
    grid-template-columns: min-content;
    grid-template-rows: repeat(3, 1fr);
    padding: 0.5em;
    row-gap: 1em;
    color: #F1F1F1;
    align-self: start;
    justify-self: center;
  }

</style>

