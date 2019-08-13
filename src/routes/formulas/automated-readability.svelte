<svelte:head>
  <title>Automated Readability Index</title>
</svelte:head>

<script>
  import { Markdown } from "../../helpers/markdown";
  import page from '!!html-loader!markdown-loader!../../pages/AutomatedReadabilityIndex.md'
</script>

<div>
  {@html Markdown.render(page)}
</div>
