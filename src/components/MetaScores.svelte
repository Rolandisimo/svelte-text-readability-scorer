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
  export let wordCount = "";
  export let sentenceCount = "";
</script>

<div class="meta-scores">
  <p><small>Word Count:</small> {wordCount}</p>
  <p><small>Number of Sentences:</small> {sentenceCount}</p>
</div>
