<script>
  export let text = "";

  import { onMount } from "svelte"
  import ScoreContainer from "../components/ScoreContainer.svelte";
  import { getBaseUrl } from "../helpers/getBaseUrl.js";
  import { FleschKincaidScorer, MAX_FLESC_KINCAID, MIN_FLESC_KINCAID } from "../scorers/FleschKincaidScorer.js";
  import { ColemanLiauScorer, MAX_COLEMAN_LIAU_INDEX, MIN_COLEMAN_LIAU_INDEX } from "../scorers/ColemanLiauScorer.js";
  import { GunningFlogScorer, MAX_GUNNING_FLOG, MIN_GUNNING_FLOG } from "../scorers/GunningFlogScorer.js";
  import { AutomatedReadabilityIndex, MAX_AUTOMATED_READABILITY, MIN_AUTOMATED_READABILITY } from "../scorers/AutomatedReadability.js";

  $: fleschKincaidScore = FleschKincaidScorer.calculate(text);
  $: gunningFlogScore = GunningFlogScorer.calculate(text);
  $: colemanLiauScore = ColemanLiauScorer.calculate(text);
  $: automatedReadabilityScore = AutomatedReadabilityIndex.calculate(text);

  $: root = "";
  onMount(() => {
    root = getBaseUrl();
  });
</script>

<ScoreContainer
  title={`<a href="${root}/formulas/flesch-kincaid">Flesch Kincaid Reading Ease</a>`}
  value={fleschKincaidScore}
  leftValue={MAX_FLESC_KINCAID}
  rightValue={MIN_FLESC_KINCAID}
  reverse={true}
/>
<ScoreContainer
  title={`<a href="${root}/formulas/gunning-flog">Gunning Fog Index</a>`}
  value={gunningFlogScore}
  subtitle={GunningFlogScorer.scoringLevel(gunningFlogScore)}
  leftValue={MIN_GUNNING_FLOG}
  rightValue={MAX_GUNNING_FLOG}
/>
<ScoreContainer
  title={`<a href="${root}/formulas/coleman-liau">Coleman Liau Index</a>`}
  value={colemanLiauScore}
  leftValue={MIN_COLEMAN_LIAU_INDEX}
  rightValue={MAX_COLEMAN_LIAU_INDEX}
/>
<ScoreContainer
  title={`<a href="${root}/formulas/automated-readability">Automated Readability Index</a>`}
  value={automatedReadabilityScore}
  leftValue={MIN_AUTOMATED_READABILITY}
  rightValue={MAX_AUTOMATED_READABILITY}
/>
