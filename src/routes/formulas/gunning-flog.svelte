<svelte:head>
  <title>Gunning Flog Index</title>
</svelte:head>

<script>
  import { Markdown } from "../../helpers/markdown";
  import page from '!!html-loader!markdown-loader!../../pages/GunningFlog.md'
</script>

<div>
  {@html Markdown.render(page)}
</div>
