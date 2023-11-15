<script lang="ts">
  import { ToastContainer, FlatToast } from "svelte-toasts";
</script>

<ToastContainer placement="bottom-right" let:data={data}>
  <FlatToast {data} />
</ToastContainer>
