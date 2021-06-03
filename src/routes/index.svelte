<script>
  import Container from "$lib/components/Container.svelte";
  import FeaturedWork from "$lib/components/FeaturedWork.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Nav from "$lib/components/Nav.svelte";
</script>

<Hero />

<Nav />

<main class="">
  <Container stretch>
    <FeaturedWork />
    <FeaturedWork />
    <FeaturedWork />
    <FeaturedWork />
    
  </Container>
</main>
