<script lang="ts">
  import Container from "./Container.svelte";
  import NavItem from "./NavItem.svelte";
  import { horizontalSlide } from "$lib/transitions";
import Logo from "./Logo.svelte";

  export let persistLogo: boolean = false;

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
  class="py-3 bg-black-900 bg-opacity-80 backdrop-filter backdrop-blur sticky top-0 z-10"
>
  <Container>
    <nav class="flex items-center -mx-2 md:-mx-4">
      {#if persistLogo || showLogo}
        <div class="flex items-center" transition:horizontalSlide>
          <a href="/" class="px-4 md:px-2">
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
  </Container>
</div>
