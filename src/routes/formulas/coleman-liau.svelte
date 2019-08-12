<svelte:head>
  <title>Coleman-Liau Index</title>
</svelte:head>

<script>
  import { Markdown } from "../../helpers/markdown";
  import page from '!!html-loader!markdown-loader!../../pages/ColemanLiau.md'
</script>

<div>
  {@html Markdown.render(page)}
</div>
