<style lang="scss">
  .form-group {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: 1.2em;
    color: rgba(0, 0, 0, 0.1);

    &.active {
      color: rgba(0, 0, 0, .9);
    }
  }

  .form-input {
    padding: 0.5em;
    // important To prevent text-area dragging effect rewriting width
    width: 100% !important;
    min-height: 10em;
  }
</style>

<script>
  export let value = ""

  export let selected = "";
  export let labelText = "";
  export let id = "";
  export let placeholder = "";
</script>

<div class="form-group">
  <label for={id} class={`label ${selected === id ? "active" : ""}`}>{labelText}</label>
  <textarea
    id={id}
    class="form-input"
    type="text"
    bind:value={value}
    placeholder={placeholder}
    aria-placeholder={placeholder}
  />
</div>
