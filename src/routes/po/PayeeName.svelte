<script lang="ts">
  import { payeeName } from "$lib/strings/poForm";

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    console.log(value);
  }

</script>

<label for={payeeName.id}>
  {payeeName.label}:
  <input
    class={payeeName.class}
    id={payeeName.id}
    type={payeeName.type}
    name={payeeName.name}
    required
    on:input={handleInput}
  >
</label>

<style>
</style>
