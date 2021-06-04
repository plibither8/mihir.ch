<script lang="ts">
  import { slide } from "svelte/transition";
  import Icon, { ArrowsExpand, X, ExternalLink } from "svelte-hero-icons";
  import Draw from "$lib/components/Graphics/Draw.svelte";
  export let name: string;
  export let description: string;
  export let colors: string[];
  export let groupExpanded = false;
  let expanded = false;
  $: expanded = groupExpanded;
  const header = {
    element: undefined,
    width: 0,
    height: 0,
  }
</script>

<div
  class="card group w-full flex-grow bg-black-700 p-5 rounded-lg relative overflow-hidden"
  bind:this={header.element}
  bind:clientWidth={header.width}
  bind:clientHeight={header.height}
>
  <Draw {header} circleCount={10} {colors}/>
  <div class="transform translate-x-0 space-y-3">
    <div class="flex justify-between items-center">
      <div class="flex space-x-2 items-center">
        <h3 class="text-gray-300 font-medium">{name}</h3>
        <Icon src={ExternalLink} size="16" class="text-gray-300" />
      </div>
      <button class="p-2 -m-2 text-gray-300 hover:text-white" on:click={() => expanded = !expanded}>
        <Icon src={expanded ? X : ArrowsExpand} size="16" />
      </button>
    </div>
    <p class="text-gray-400 text-sm leading-normal">{description}</p>
    {#if expanded}
      <div transition:slide={{ duration: 100 }}>
        <p class="text-gray-500 text-sm leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam excepturi consequatur officiis delectus veniam atque exercitationem neque sequi aspernatur tempore, itaque, culpa, facilis velit. Suscipit fugit delectus consequuntur laborum ex.</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .card {
    height: min-content;
    min-width: 20rem;
  }
</style>
