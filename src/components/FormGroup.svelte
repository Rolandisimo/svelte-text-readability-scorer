<style lang="scss">
  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-input {
    padding: 0.5em;
    width: 100% !important;
    min-height: 8em;
  }
</style>

<script>
  export let value = "";
  export let selected = "";
  export let labelText = "";
  export let id = "";
  export let placeholder = "";
</script>

<div class="form-group">
  <textarea
    id={id}
    class="form-input"
    type="text"
    bind:value={value}
    placeholder={placeholder}
    aria-placeholder={placeholder}
  />
</div>
