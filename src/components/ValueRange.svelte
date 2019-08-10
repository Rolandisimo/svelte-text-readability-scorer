<style lang="scss">
  $rangeContainerHeight: 1.5em;
  @mixin limitBarCommonStyles {
    position: absolute;
    top: 50%;
    width: 1px;
    height: $rangeContainerHeight;
    background-color: #34495e;
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
  }
  .range {
    height: 2px;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ecf0f1;
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
    background-color: #2c3e50;
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

  const progress = tweened(0, {
		duration: 300,
		easing: cubicOut
	});

  export let leftValue;
  export let rightValue;
  export let value;
  export let reverse = false;
  let currentElementWidth = 0;
  $: progress.set(value / Math.max(rightValue, leftValue));

  const setCurrentElementWidth = () => {
    currentElementWidth = document.querySelector(".currentValue").getBoundingClientRect().width;
  };
  onMount(setCurrentElementWidth);

  $: currentValueElementWidthHasToBeSubtracted = (reverse ? $progress < 0.5 : $progress > 0.5);
  $: subtractValueToPreventOverflow = `${currentValueElementWidthHasToBeSubtracted ? currentElementWidth : 0}px`;
  $: currentValueStyle = `left: calc(${reverse ? "100% - " : ""}${$progress * 100}% - ${subtractValueToPreventOverflow});`;
</script>

<svelte:window on:resize={setCurrentElementWidth} />

<div class="container">
  <div class="valueContainer">
    <div class="range"></div>
    <div class="minValue">
      <span class="limitLabel">{leftValue}</span>
    </div>
    <div class="maxValue">
      <span class="limitLabel">{rightValue}</span>
    </div>
    <div class="currentValue" style={currentValueStyle} />
  </div>
</div>
