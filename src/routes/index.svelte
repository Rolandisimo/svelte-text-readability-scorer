<style lang="scss">
  * {
    font-family: "Montserrat", sans-serif;
  }
  :global(input),
  :global(textarea) {
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.10);
    border: 0;
    font-family: inherit;
    font-size: inherit;
  }
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .score-container {
    margin: 1em 0;
  }
  .score-label {
    margin: 0;
    color: #34495e;
  }
</style>

<script>
  import FormGroup from "../components/FormGroup.svelte";
  import ValueRange from "../components/ValueRange.svelte";
  import {
    FleschKincaidScorer,
    MAX_FLESC_KINCAID,
    MIN_FLESC_KINCAID,
  } from "../components/FleschKincaidScorer.js";
  import {
    GunningFlogScorer,
    MAX_GUNNING_FLOG,
    MIN_GUNNING_FLOG,
  } from "../components/GunningFlogScorer.js";

  let subjectText = "";
  $: fleschKincaidScore = FleschKincaidScorer.calculate(subjectText);
  $: gunningFlogScore = GunningFlogScorer.calculate(subjectText);
</script>

<svelte:head>
  <title>Text Score</title>
</svelte:head>

<div class="container">
  <h1>How readable is your text?</h1>
  <small></small>
  <hr/>
  <FormGroup
    id={"subjectText"}
    bind:value={subjectText}
    placeholder="Write your text here and see the score being calculated"
  />
  <div class="score-container">
    <p class="score-label">
      <small>Flesch Kincaid Reading Ease:</small>
      {fleschKincaidScore.toFixed(2)}
    </p>
    <ValueRange
      reverse={true}
      rightValue={MIN_FLESC_KINCAID}
      leftValue={MAX_FLESC_KINCAID}
      value={fleschKincaidScore}
    />
  </div>
  <div class="score-container">
    <p class="score-label">
      <small>Gunning fog index:</small>
      {gunningFlogScore.toFixed(2)}
    </p>
    <p class="score-label">{GunningFlogScorer.scoringLevel(gunningFlogScore)}</p>
    <ValueRange
      leftValue={MIN_GUNNING_FLOG}
      rightValue={MAX_GUNNING_FLOG}
      value={gunningFlogScore}
    />
  </div>
</div>
