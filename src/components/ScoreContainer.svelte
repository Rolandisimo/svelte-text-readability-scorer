<style lang="scss">
  .container {
    margin: 1em 0;
  }
  .label {
    margin: 0;
    color: #34495e;
  }
</style>

<script>
  import ValueRange from "../components/ValueRange.svelte";

  export let title;
  export let subtitle = "";
  export let value;
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
    <small>{title}:</small>
    {value && value.toFixed(2)}

    {#if subtitle}
      <br/>
      <small class="label">{subtitle}</small>
    {/if}
  </p>
  <ValueRange {...valueRangeProps} />
</div>
