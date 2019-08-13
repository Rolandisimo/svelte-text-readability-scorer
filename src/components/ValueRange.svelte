<style lang="scss">
  $rangeContainerHeight: 1.5em;
  $darkColor: #34495e;
  $lightColor: #ecf0f1;
  @mixin limitBarCommonStyles {
    position: absolute;
    top: 50%;
    width: 1px;
    height: $rangeContainerHeight;
    background-color: $darkColor;
    border-radius: 100px;
  }

  .container {
    text-align: center;
    width: 100%;
  }

  .valueContainer {
    position: relative;
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: $rangeContainerHeight;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .range {
    height: 2px;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: $lightColor;
    flex: 1;
  }
  .minValue {
    left: 0;
    transform: translate(-100%, -50%);
    @include limitBarCommonStyles;
  }
  .maxValue {
    right: 0;
    transform: translate(100%, -50%);
    @include limitBarCommonStyles;
  }

  .currentValue {
    position: absolute;
    background-color: $darkColor;
    width: 3vw;
    height: 3vw;
    max-width: 1em;
    max-height: 1em;
    border-radius: 1000px;
    left: 43%;
    top: 50%;
    transform: translateY(-50%);
  }

  .limitLabel {
    bottom: -100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { createRGBValue } from "../helpers/createRGBValue";

  export let leftValue;
  export let rightValue;
  export let value;
  export let reverse = false;

  let currentElementWidth = 0;
  const colors = [
    { red: 46, green: 204, blue: 113, },
    { red: 243, green: 156, blue: 18, },
    { red: 231, green: 76, blue: 60, },
  ];
  const progress = tweened(0, { duration: 300, easing: cubicOut });
  const setCurrentElementWidth = () => {
    currentElementWidth = document.querySelector(".currentValue").getBoundingClientRect().width;
  };

  /**
   *  Ensure the minimum position of the progress is 0%
   */
  $: {
    if (
      (leftValue < rightValue && value === leftValue)
      || (rightValue < leftValue && value === rightValue)
    ) {
      value = 0;
    }
  }

  $: progress.set(value / Math.max(rightValue, leftValue));
  $: currentValueElementWidthHasToBeSubtracted = (reverse ? $progress < 0.5 : $progress > 0.5);
  $: subtractValueToPreventOverflow = `${currentValueElementWidthHasToBeSubtracted ? currentElementWidth : 0}px`;
  $: color = createRGBValue(reverse ? 1 - $progress : $progress, colors);
  $: rgb = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  $: currentValueStyle = `background-color: ${rgb}; left: calc(${reverse ? "100% - " : ""}${$progress * 100}% - ${subtractValueToPreventOverflow});`;

  onMount(setCurrentElementWidth);
</script>

<svelte:window on:resize={setCurrentElementWidth} />

<div class="container">
  <div class="valueContainer">
    <div class="range" />
    <div class="minValue">
      <span class="limitLabel">{leftValue}</span>
    </div>
    <div class="maxValue">
      <span class="limitLabel">{rightValue}</span>
    </div>
    <div class="currentValue" style={currentValueStyle} />
  </div>
</div>
