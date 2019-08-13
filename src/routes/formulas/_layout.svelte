<style lang="scss">
  :global(.table) {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;
  }

  :global(.table td,.table th) {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6
  }

  :global(.table thead th) {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6
  }

  :global(.table tbody+tbody) {
    border-top: 2px solid #dee2e6
  }

  :global(.table-striped tbody tr:nth-of-type(odd)) {
    background-color: rgba(0,0,0,.05)
  }

  @media (max-width: 575.98px) {
    :global(.table-responsive-sm) {
      display:block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: -ms-autohiding-scrollbar
    }
  }

  button {
    display: inline-flex;
    border: 1px solid;
    border-radius: 1px;
    padding: 0.5em 1.5em;
    margin-bottom: 1em;
    text-decoration: none;
    align-items: center;
    transition: .1s;
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
      border-color: #f2f2f2;
    }
  }
</style>

<script>
  import { onMount } from "svelte";

  $: goBack = function() {
    window.history.back();
  };
  onMount(() => {
    const table = document.querySelector("table");
    /** Styles cherry-picked from Bootstrap
     * @see https://getbootstrap.com/docs/4.0/content/tables
     */
    table && table.classList.add("table", "table-striped", "table-responsive-sm");
  });
</script>

<main>
  <button on:click={goBack}>Back</button>
  <slot></slot>
</main>
