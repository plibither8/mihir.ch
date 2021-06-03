<script lang="ts">
  import { page } from "$app/stores"
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../global.postcss'
</script>

{#if $page.path !== "/"}
  <Nav persistLogo />
{/if}

<slot />

<Footer />
