<script>
  import { chunkify } from '$lib/utils';
  import Container from '$lib/components/Container.svelte';
  import DirectoryItem from '$lib/components/Home/DirectoryItem.svelte';
  import HorizontalScrollContainer from '$lib/components/HorizontalScrollContainer.svelte';
  import data from '$lib/data/directory.json';
</script>

<Container className="space-y-5">
  <p class="text-gray-400 leading-normal">Links around the web that I own.</p>
</Container>

<HorizontalScrollContainer>
  <div class="flex flex-col space-y-5">
    {#each chunkify(data, 2) as row}
      <div class="flex space-x-5">
        {#each row as item}
          <DirectoryItem {...item} />
        {/each}
      </div>
    {/each}
  </div>
</HorizontalScrollContainer>
