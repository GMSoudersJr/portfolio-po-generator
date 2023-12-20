<script lang="ts">
	import type {ActionData} from "../../routes/login/$types";

  export let form: ActionData;
</script>

<form
  class="login-form"
  method="POST"
  action="/login"
>
  {#if form?.incorrect}<p class="error">{form?.message}</p> {/if}
  {#if form?.missing}<p class="error">{form?.message}</p> {/if}
  <label for="login-username">
    Username:
    <input
      type="text"
      name="username"
      id="login-username"
      value={form?.username ?? ''}
      autocomplete="username"
    >
  </label>
  <label for="login-password">
    Password:
    <input
      type="password"
      name="password"
      id="login-password"
    >
  </label>
  <input
    type="submit"
    name="login-submit"
    id="login-submit"
    value="Login"
  >
</form>

<style>
  .login-form {
    width: 200px;
    height: min-content;
    border: 3px solid #F1F1F1;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 1em;
    padding: 1rem 0.8rem;
    color: #F1F1F1;
    align-self: start;
    justify-self: center;
  }
  input[type=text], input[type=password], input[type=submit] {
    width: 100%;
    padding: 6px 10px;
    font-size: 1rem;
  }
  .error {
    color: red;
  }

  @media screen and (max-width: 40em) {
    .login-form {
      width: 90%;
      height: 30%;
    }
  }

</style>

