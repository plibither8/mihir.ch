<script>
  import Container from "$lib/components/Container.svelte";
  import FeaturedProjects from "$lib/components/FeaturedProjects.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Nav from "$lib/components/Nav.svelte";
</script>

<Hero />

<Nav />

<main class="">
  <Container stretch>
    <FeaturedProjects />
    <FeaturedProjects />
    <FeaturedProjects />
    <FeaturedProjects />
    
  </Container>
</main>
