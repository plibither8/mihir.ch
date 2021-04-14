<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status }
    };
  }
</script>

<script>
  import Page from '$lib/Page.svelte';

  export let error;
  export let status;
</script>

<Page title="{error.name} {status}">
  <p>{error.message}</p>
</Page>
