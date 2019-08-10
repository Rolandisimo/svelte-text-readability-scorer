<style lang="scss">
  @mixin limitBarCommonStyles {
    position: absolute;
    top: 50%;
    width: 1px;
    height: 1.5em;
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
  }
  .range {
    height: 2px;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #ecf0f1;
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

  export let min = 0
  export let max = 100
  export let value;
  let currentElementWidth = 0;
  $: progress.set(value / max);

  const setCurrentElementWidth = () => {
    currentElementWidth = document.querySelector(".currentValue").getBoundingClientRect().width;
  };

  onMount(setCurrentElementWidth);
</script>

<svelte:window on:resize={setCurrentElementWidth} />

<div class="container">
  <div class="valueContainer">
    <div class="range"></div>
    <div class="minValue">
      <span class="limitLabel">{min}</span>
    </div>
    <div class="maxValue">
      <span class="limitLabel">{max}</span>
    </div>
    <div class="currentValue" style={`left: calc(${$progress * 100}% - ${$progress > 0.5 ? currentElementWidth : 0}px);`}></div>
  </div>
</div>
