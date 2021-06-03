<script>
  import { chunkify } from "$lib/utils";
  import Icon, { Link } from "svelte-hero-icons";
  import Container from "./Container.svelte";
  import DirectoryItem from "./DirectoryItem.svelte";
  import HorizontalScrollContainer from "./HorizontalScrollContainer.svelte";
  import data from "../../data/directory.json";
</script>

<section class="py-10 space-y-3" id="directory">
  <Container className="space-y-5">
    <div class="group flex items-center relative">
      <a class="group-hover:opacity-100 opacity-0 absolute right-full pr-2 transition-opacity" href="#directory">
        <Icon src={Link} size="20" class="text-gray-300" />
      </a>
      <h2 class="text-gray-300 text-2xl font-black">Directory</h2>
    </div>
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
</section>
