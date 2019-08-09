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
</style>

<script>
  import FormGroup from "../components/FormGroup.svelte";
  import ValueRange from "../components/ValueRange.svelte";

  $: reText = "";
  $: reScore = Math.max(calculateReadabilityScore(reText), 0);
  let selected = "";
  const onFocus = function() {
    selected = this.id;
  }
  const onBlur = function() {
    selected = "";
  }

  function calculateReadabilityScore(text) {
    if (!text) {
      return 120;
    }

    const asl = countWords(text) / countSentences(text);
    const asw = countSyllables(text) / countWords(text);
    return 206.835 - (1.015 * asl) - (84.6 * asw);
  }

  function countWords(text) {
    return findWords(text).length || 1;
  }

  function findWords(text) {
    return text.match(/([^\u0000-\u007F]|\w)+/g) || [];
  }

  function countSentences(text) {
    const match = text.match(/[\w|\)][.?!](\s|$)/g) || [];
    return match.length || 1;
  }

  function countSyllables(text) {
    const textLower = text.toLowerCase();
    let count = 0;

    findWords(textLower).forEach(w => {
      let word = w;
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
      word = word.replace(/^y/, '');
      const match = word.match(/[aeiouy]{1,2}/g) || [];
      count += match.length;
    })

    return count || 1;
  }
</script>

<svelte:head>
  <title>Text Score</title>
</svelte:head>

<div class="container">
  <h1>How readable is your text?</h1>
  <small></small>
  <hr/>
  <FormGroup
    selected={selected}
    id={"re"}
    onFocus={onFocus}
    onBlur={onBlur}
    bind:value={reText}
    placeholder="Write your text here and see the score being calculated"
  />
  <div class="container">
    <p>Flesch Kincaid Reading Ease: {reScore}</p>
    <ValueRange
      min={0}
      max={120}
      value={reScore}
    />
  </div>
</div>
