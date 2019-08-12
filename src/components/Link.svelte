<svelte:options immutable={true} tag="formula-link" />

<script>
  export let href = "#";
  export let title;
</script>

<style>
  a {
    color: violet;
    font-size: 3em;
  }
</style>

<a href={href} rel='prefetch'>{title}</a>
