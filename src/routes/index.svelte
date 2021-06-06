<script>
  import Container from '$lib/components/Container.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Directory from '$lib/components/Home/Directory.svelte';
  import Contact from '$lib/components/Home/Contact.svelte';
  import FeaturedProjects from '$lib/components/Home/FeaturedProjects.svelte';
  import Hero from '$lib/components/Home/Hero.svelte';
  import HomeSection from '$lib/components/Home/Section.svelte';
  import WhatsUp from '$lib/components/Home/WhatsUp.svelte';
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
      <WhatsUp />
    </HomeSection>

    <HomeSection heading="Contact">
      <Contact />
    </HomeSection>
  </Container>
</main>
