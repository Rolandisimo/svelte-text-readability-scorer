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

  .meta-scores {
    margin: 1em 0;
    align-self: flex-start;
    text-align: left;
    font-size: .8em;

    p { margin: 0; }
    small {
      margin: 0;
      color: #34495e;
    }
  }
</style>

<script>
  import FormGroup from "../components/FormGroup.svelte";
  import ValueRange from "../components/ValueRange.svelte";
  import ScoreContainer from "../components/ScoreContainer.svelte";
  import { countWords, countSentences } from "../helpers/writtenLanguageHelpers.js";
  import {
    FleschKincaidScorer,
    MAX_FLESC_KINCAID,
    MIN_FLESC_KINCAID,
  } from "../components/FleschKincaidScorer.js";
  import {
    ColemanLiauScorer,
    MAX_COLEMAN_LIAU_INDEX,
    MIN_COLEMAN_LIAU_INDEX,
  } from "../components/ColemanLiauScorer.js";
  import {
    GunningFlogScorer,
    MAX_GUNNING_FLOG,
    MIN_GUNNING_FLOG,
  } from "../components/GunningFlogScorer.js";

  let subjectText = "";
  $: fleschKincaidScore = FleschKincaidScorer.calculate(subjectText);
  $: gunningFlogScore = GunningFlogScorer.calculate(subjectText);
  $: colemanLiauScore = ColemanLiauScorer.calculate(subjectText);
</script>

<svelte:head>
  <title>Text Score</title>
</svelte:head>

<div class="container">
  <h1>How readable is your text?</h1>
  <hr/>
  <FormGroup
    id={"subjectText"}
    bind:value={subjectText}
    placeholder="Write your text here and see the score being calculated"
  />

  <div class="meta-scores">
    <p><small>Word Count:</small> {countWords(subjectText)}</p>
    <p><small>Number of Sentences:</small> {countSentences(subjectText)}</p>
  </div>

  <ScoreContainer
    title="Flesch Kincaid Reading Ease"
    value={fleschKincaidScore}
    leftValue={MAX_FLESC_KINCAID}
    rightValue={MIN_FLESC_KINCAID}
    reverse={true}
  />
  <ScoreContainer
    title="Gunning Fog Index"
    value={gunningFlogScore}
    subtitle={GunningFlogScorer.scoringLevel(gunningFlogScore)}
    leftValue={MIN_GUNNING_FLOG}
    rightValue={MAX_GUNNING_FLOG}
  />
  <ScoreContainer
    title="Coleman Liau Index"
    value={colemanLiauScore}
    leftValue={MIN_COLEMAN_LIAU_INDEX}
    rightValue={MAX_COLEMAN_LIAU_INDEX}
  />
</div>
