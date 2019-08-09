<script>
  import { afterUpdate } from 'svelte';

  export let min = 0
  export let max = 100
  export let value;
  $: valueInPercentages = 100 - (value / max * 100);


  afterUpdate(() => {
    const containerElement = document.querySelector(".valueContainer");
    const valueElement = document.querySelector(".currentValue");
    valueElement.setAttribute("style", `left: calc(100% - ${valueInPercentages}%);`)
  })
</script>

<style>
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
    background-color: red;
  }
  .minValue {
    position: absolute;
    left: 0;
    top: 50%;
    width: .2em;
    height: 1.5em;
    transform: translateY(-50%);
    background-color: black;
  }
  .maxValue {
    position: absolute;
    right: 0;
    top: 50%;
    width: .2em;
    height: 1.5em;
    transform: translateY(-50%);
    background-color: black;
  }

  .currentValue {
    position: absolute;
    background-color: blue;
    width: 1em;
    height: 1em;
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

<div class="container">
  <div class="valueContainer">
    <div class="range"></div>
    <div class="minValue">
      <span class="limitLabel">{min}</span>
    </div>
    <div class="maxValue">
      <span class="limitLabel">{max}</span>
    </div>
    <div class="currentValue"></div>
  </div>
</div>
