<style lang="scss">
  .container {
    margin: 1em 0;
  }
  .label {
    margin: 0;
    color: #34495e;
  }


  .page-link {
    text-decoration: none;

    &:hover {
      text-decoration: initial;
    }
  }
</style>

<script>
  import ValueRange from "../components/ValueRange.svelte";

  export let title;
  export let subtitle = "";
  export let value = 0.5;
  export let leftValue;
  export let rightValue;
  export let reverse = undefined;

  $: valueRangeProps = {
    value,
    leftValue,
    rightValue,
    reverse,
  };
</script>

<div class="container">
  <p class="label">
    <small class="page-link">{@html title}:</small>
    {value && value.toFixed(2).replace(".00", "")}

    {#if subtitle}
      <br/>
      <small class="label">{subtitle}</small>
    {/if}
  </p>

  <ValueRange {...valueRangeProps} />
</div>
