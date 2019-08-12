<style lang="scss">
  .meta-scores {
    margin: 1em 0;
    align-self: flex-start;
    text-align: left;
    font-size: .8em;
  }

  p {
    margin: 0;
  }

  small {
    margin: 0;
    color: #34495e;
  }
</style>


<script>
  import { countWords, countSentences } from "../helpers/writtenLanguageHelpers.js";
  export let text = "";
</script>

<div class="meta-scores">
  <p><small>Word Count:</small> {countWords(text)}</p>
  <p><small>Number of Sentences:</small> {countSentences(text)}</p>
</div>
