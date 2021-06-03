<script>
  import Container from "$lib/components/Container.svelte";
  import Directory from "$lib/components/Directory.svelte";
  import FeaturedProjects from "$lib/components/FeaturedProjects.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Nav from "$lib/components/Nav.svelte";
</script>

<Hero />

<Nav />

<main class="">
  <Container stretch>
    <FeaturedProjects />
    <Directory />
  </Container>
</main>
