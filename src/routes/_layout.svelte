<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <title>Text Readability Evaluator</title>
  <meta name="author" content="Rolands Jegorovs https://github.com/Rolandisimo">
  <meta name="description" content="A real-time svelte text readabilty evaluator based on various linguistic formulas such as Coleman Liau Index, Flesch-Kincaid Readability Ease, Gunning Flog Index, etc.">
  <meta name="keywords" content="Flesch-Kincaid,Flesch-Kincaid Readability Ease,Gunning Flog Index,Readability,readability,text evaluator,Coleman Liau Index,Coleam-Liau,Gunning-Flog">
</svelte:head>

<main>
  <slot></slot>
</main>
