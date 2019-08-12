<svelte:head>
  <title>Flesch-Kincaid</title>
</svelte:head>

<script>
  import { Markdown } from "../../helpers/markdown";
  import page from '!!html-loader!markdown-loader!../../pages/FleschKincaid.md'
</script>

<div>
  {@html Markdown.render(page)}
</div>
