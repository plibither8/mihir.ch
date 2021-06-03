<script lang="ts">
  import Container from "./Container.svelte";
  import NavItem from "./NavItem.svelte";
  import Logo from "./Logo.svelte";
  import { slide } from "svelte/transition";
  import { horizontalSlide } from "$lib/transitions";
  import Icon, { ChevronDoubleLeft } from "svelte-hero-icons";

  export let persistLogo: boolean = false;

  let expand: boolean = false;
  let scrollY: number;
  let parentElement: HTMLDivElement;
  let showLogo = false;
  $: if (parentElement && scrollY) {
    const { top, y } = parentElement.getBoundingClientRect();
    showLogo = top === 0 || y === 0;
  }
</script>

<svelte:window bind:scrollY />

<div
  bind:this={parentElement}
  class="py-3 bg-black-900 bg-opacity-80 backdrop-filter backdrop-blur sticky top-0 z-10 border-b border-black-500"
>
  <Container>
    <div class="flex items-center justify-between space-x-2">
      <nav class="flex items-center overflow-auto {!showLogo && !persistLogo && "-mx-2 md:-mx-4"}">
        {#if persistLogo || showLogo}
          <div class="flex items-center" transition:horizontalSlide>
            <a href="/" class="">
              <Logo />
            </a>
            <NavItem label="Mihir." href="/" strong />
          </div>
        {/if}
        <NavItem label="Code" href="/projects" />
        <NavItem label="Writing" href="/projects" />
        <NavItem label="Contact" href="/projects" />
        <NavItem label="GitHub" href="/projects" />
        <NavItem label="Twitter" href="/projects" />
      </nav>
      <button class="p-2 -m-2" on:click={() => expand = !expand}>
        <Icon src={ChevronDoubleLeft} size="16" class="text-gray-300 transition-transform transform {expand && '-rotate-90'}" />
      </button>
    </div>
    {#if expand}
      <nav transition:slide={{ duration: 200 }} class="py-5 flex flex-col space-y-5 text-sm">
        <a href="/" class="flex flex-col space-y-1 hover:text-purple-400 text-gray-300">
          <span class="font-medium">Thanks and attributions ❤️</span>
          <span class="text-xs text-gray-500">Acknowledgement to the people who have helped me :)</span>
        </a>
        <a href="/" class="flex flex-col space-y-1 hover:text-purple-400 text-gray-300">
          <span class="font-medium">Versions</span>
          <span class="text-xs text-gray-500">Revisions of this website, over the years.</span>
        </a>
        <a href="/" class="flex flex-col space-y-1 hover:text-purple-400 text-gray-300">
          <span class="font-medium">Support</span>
          <span class="text-xs text-gray-500">Support me and my work, in many ways.</span>
        </a>
        <a href="/" class="flex flex-col space-y-1 hover:text-purple-400 text-gray-300">
          <span class="font-medium">Uses</span>
          <span class="text-xs text-gray-500">Some other page I guess...</span>
        </a>
      </nav>
    {/if}
  </Container>
</div>
