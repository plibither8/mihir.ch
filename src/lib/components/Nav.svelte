<script lang="ts">
  import { slide } from 'svelte/transition';
  import { horizontalSlide } from '$lib/transitions';
  import Icon, { ChevronDoubleLeft } from 'svelte-hero-icons';
  import Container from '$lib/components/Container.svelte';
  import NavItem from '$lib/components/NavItem.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import navigation from '$lib/data/navigation.json';

  export let persistLogo = false;

  let expand = false;
  let scrollY: number;
  let parentElement: HTMLDivElement;
  let showLogo = false;
  $: if (!persistLogo && parentElement && scrollY) {
    const { top, y } = parentElement.getBoundingClientRect();
    showLogo = !top || !y || top < 10 || y < 10;
  }
</script>

<svelte:window bind:scrollY />

<div
  bind:this={parentElement}
  class="py-3 bg-black-900 bg-opacity-80 backdrop-filter backdrop-blur sticky top-0 z-10 border-b border-black-500"
>
  <Container>
    <div class="flex items-center justify-between space-x-2">
      <nav
        class="flex items-center overflow-auto {!showLogo &&
          !persistLogo &&
          '-mx-2 md:-mx-4'}"
      >
        {#if persistLogo || showLogo}
          <div class="flex items-center" transition:horizontalSlide>
            <a href="/" class=""><Logo /></a>
            <NavItem type="primary" label="Mihir." href="/" strong />
          </div>
        {/if}
        {#each navigation.primary as item}
          <NavItem type="primary" {...item} />
        {/each}
      </nav>
      <button class="p-2 -m-2" on:click={() => (expand = !expand)}>
        <Icon
          src={ChevronDoubleLeft}
          size="16"
          class="text-gray-300 transition-transform transform {expand &&
            '-rotate-90'}"
        />
      </button>
    </div>
    {#if expand}
      <nav
        transition:slide={{ duration: 200 }}
        class="py-5 grid grid-cols-2 lg:grid-cols-3 gap-5 text-sm"
      >
        {#each navigation.secondary as item}
          <NavItem type="secondary" {...item} />
        {/each}
      </nav>
    {/if}
  </Container>
</div>
