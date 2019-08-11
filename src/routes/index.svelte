<style lang="scss">
  * {
    font-family: "Montserrat", sans-serif;
  }
  :global(input),
  :global(textarea) {
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.10);
    -webkit-appearance: none;
    border: 0;
    font-family: inherit;
    font-size: inherit;
  }
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>

<script>
  import FormGroup from "../components/FormGroup.svelte";
  import ValueRange from "../components/ValueRange.svelte";
  import ScoreContainer from "../components/ScoreContainer.svelte";

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

  <ScoreContainer
    title="Flesch Kincaid Reading Ease"
    value={fleschKincaidScore}
    leftValue={MAX_FLESC_KINCAID}
    rightValue={MIN_FLESC_KINCAID}
    reverse={true}
  />
  <ScoreContainer
    title="Gunning fog index"
    value={gunningFlogScore}
    subtitle={GunningFlogScorer.scoringLevel(gunningFlogScore)}
    leftValue={MIN_GUNNING_FLOG}
    rightValue={MAX_GUNNING_FLOG}
  />
</div>
