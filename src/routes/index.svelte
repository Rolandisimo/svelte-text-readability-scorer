<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .read-more-info {
    font-style: italic;
    color: rgba(127, 140, 141, .7);
    margin: 1em 0;
  }
</style>

<script>
  import { beforeUpdate } from "svelte";
  import { writable } from "svelte/store";

  import FormGroup from "../components/FormGroup.svelte";
  import MetaScores from "../components/MetaScores.svelte";
  import Scores from "../components/Scores.svelte";
  import { cleanTextFromAbbreviations } from "../helpers/writtenLanguageHelpers";

  let text = null;

  beforeUpdate(() => {
    text = text !== null ? text : window.sessionStorage.getItem("text");
    window.sessionStorage.setItem("text", text);
  });

  $: cleanText = cleanTextFromAbbreviations((text || "").trim())

</script>

<div class="container">
  <h1>How readable is your text?</h1>

  <FormGroup
    id={"subjectText"}
    bind:value={text}
    placeholder="Write your text here and see the score being calculated"
  />

  <MetaScores text={cleanText} />
  <h6 class="read-more-info">Click on the titles to learn more about the formulas!</h6>

  <Scores text={cleanText} />
</div>
