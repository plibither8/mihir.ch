<script>
  import { chunkify } from "$lib/utils";
  import Container from "./Container.svelte";
  import FeaturedProjectsItem from "./FeaturedProjectsItem.svelte";
  import HorizontalScrollContainer from "./HorizontalScrollContainer.svelte";
  import data from "../../data/featured-projects.json";
  import Icon, { ArrowsExpand } from "svelte-hero-icons";
  let expanded = false;
</script>

<Container className="space-y-5">
  <p class="text-gray-400 leading-normal">The chosen few, personal projects I'm proud enough to display with such prominence.</p>
  <p class="text-gray-400 leading-normal">The rest are <a class="fancy" href="/code">organised and indexed here</a>, or my <a href="https://github.com/plibither8" class="fancy">GitHub</a>.</p>
  <button on:click={() => expanded = !expanded} class="flex items-center space-x-2 text-gray-300 font-medium">
    <Icon src={ArrowsExpand} size="16" class="text-gray-100" />
    <span>{expanded ? 'Collapse' : 'Expand'} all</span>
  </button>
</Container>

<HorizontalScrollContainer>
  <div class="flex flex-col space-y-5">
    {#each chunkify(data, 2) as row}
      <div class="flex space-x-5">
        {#each row as item}
          <FeaturedProjectsItem {...item} groupExpanded={expanded} />
        {/each}
      </div>
    {/each}
  </div>
</HorizontalScrollContainer>
