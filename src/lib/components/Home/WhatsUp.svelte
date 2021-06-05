<script lang="ts">
  import HorizontalScrollContainer from "../HorizontalScrollContainer.svelte";
  import HackerNews from "./WhatsUp/HackerNews.svelte";
  import Music from "./WhatsUp/Music.svelte";
  import Programming from "./WhatsUp/Programming.svelte";
  const items = [
    {
      heading: "Music",
      description: "Top artists I've been listening to this past week",
      component: Music,
      data: [],
    },
    {
      heading: "Programming",
      description: "Aliquip reprehenderit Lorem amet amet adipisicing.",
      component: Programming,
      data: [],
    },
    {
      heading: "Hacker News",
      description: "Ipsum ad occaecat aliquip tempor mollit consectetur magna irure anim excepteur laborum mollit velit.",
      component: HackerNews,
      data: [],
    }
  ];
</script>

<HorizontalScrollContainer>
  <div class="flex space-x-10">
    {#each items as { heading, description, component, data }}
      <div class="space-y-5 flex flex-col">
        <h3 class="leading-normal flex-grow">
          <span class="font-medium text-white text-lg">{heading}</span>
          <span class="text-gray-400 mx-1">&mdash;</span>
          <span class="text-gray-400">{description}</span>
        </h3>
        <svelte:component this={component} {data} />
      </div>
    {/each}
  </div>
</HorizontalScrollContainer>
