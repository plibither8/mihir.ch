<script>
  import Container from "$lib/components/Container.svelte";
  import Directory from "$lib/components/Directory.svelte";
  import FeaturedProjects from "$lib/components/FeaturedProjects.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import HomeSection from "$lib/components/HomeSection.svelte";
  import Nav from "$lib/components/Nav.svelte";
</script>

<Hero />

<Nav />

<main>
  <Container stretch>
    <HomeSection heading="Featured projects">
      <FeaturedProjects />
    </HomeSection>

    <HomeSection heading="Directory">
      <Directory />
    </HomeSection>

    <HomeSection heading="What's up?">
      <Directory />
    </HomeSection>

    <HomeSection heading="Contact">
      <Directory />
    </HomeSection>
  </Container>
</main>
