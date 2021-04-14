<script lang="ts">
  import DirectoryLink from '$lib/DirectoryLink.svelte';
  import FeaturedWorkCard from '$lib/FeaturedWorkCard.svelte';
  import Page from '$lib/Page.svelte';
  import Section from '$lib/Section.svelte';
  import directory from '../data/directory.json';
  import featuredWork from '../data/featured-work.json';
</script>

<svelte:head>
  <title>Mihir Chaturvedi</title>
</svelte:head>

<Page noPadding>
  <Section title="Featured work" specialWidth>
    <div class="horizontal-scroll-padding px-5 md:px-0 py-5 -mt-5 flex space-x-5 overflow-auto">
      {#each featuredWork as item}
        <FeaturedWorkCard {...item} />
      {/each}
    </div>
  </Section>

  <Section title="Directory">
    <div class="space-y-5">
      {#each directory as item}
        <DirectoryLink {...item} />
      {/each}
    </div>
  </Section>

  <Section title="Recent activity" />

  <Section title="Contact" />
</Page>
