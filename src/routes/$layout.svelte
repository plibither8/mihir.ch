<script lang="ts">
  import { page } from '$app/stores';
  import Footer from '$lib/Footer.svelte';
  import Hero from '$lib/Hero.svelte';
  import Navigation from '$lib/Navigation.svelte';
  import '../app.postcss';
</script>

<Hero collapsed={$page?.path !== '/'} />

<Navigation />

<main class="max-w-3xl w-full mx-auto flex-grow">
  <slot />
</main>

<Footer />
