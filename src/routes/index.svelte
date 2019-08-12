<style lang="scss">
  * {
    font-family: "Montserrat", sans-serif;
  }
  :global(a:hover) {
    opacity: .8;
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

  .read-more-info {
    font-style: italic;
    color: rgba(127, 140, 141, .7);
  }
</style>

<script>
  import FormGroup from "../components/FormGroup.svelte";
  import ValueRange from "../components/ValueRange.svelte";
  import ScoreContainer from "../components/ScoreContainer.svelte";
  import MetaScores from "../components/MetaScores.svelte";
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

<div class="container">
  <h1>How readable is your text?</h1>

  <FormGroup
    id={"subjectText"}
    bind:value={subjectText}
    placeholder="Write your text here and see the score being calculated"
  />

  <MetaScores text={subjectText} />
  <h6 class="read-more-info">Click on the titles to learn more about the formulas!</h6>

  <ScoreContainer
    title="<a href='/formulas/flesch-kincaid' rel='prefetch'>Flesch Kincaid Reading Ease</a>"
    value={fleschKincaidScore}
    leftValue={MAX_FLESC_KINCAID}
    rightValue={MIN_FLESC_KINCAID}
    reverse={true}
  />
  <ScoreContainer
    title="<a href='/formulas/gunning-flog' rel='prefetch'>Gunning Fog Index</a>"
    value={gunningFlogScore}
    subtitle={GunningFlogScorer.scoringLevel(gunningFlogScore)}
    leftValue={MIN_GUNNING_FLOG}
    rightValue={MAX_GUNNING_FLOG}
  />
  <ScoreContainer
    title="<a href='/formulas/coleman-liau' rel='prefetch'>Coleman Liau Index</a>"
    value={colemanLiauScore}
    leftValue={MIN_COLEMAN_LIAU_INDEX}
    rightValue={MAX_COLEMAN_LIAU_INDEX}
  />
</div>
