<script lang="ts">
  import Container from "./Container.svelte";
  import NavItem from "./NavItem.svelte";
  import { slide } from "svelte/transition";
  import { horizontalSlide } from "$lib/transitions";
  let scrollY: number;
  let parentElement: HTMLDivElement;
  let showLogo = false;
  $: {
    if (parentElement) {
      const { top } = parentElement.getBoundingClientRect();
      showLogo = top === 0;
    };
    scrollY;
  }
</script>

<svelte:window bind:scrollY />

<div
  bind:this={parentElement}
  class="py-3 bg-black-900 bg-opacity-80 backdrop-filter backdrop-blur-md sticky top-0"
>
  <Container>
    <nav class="flex items-center -mx-2 md:-mx-4">
      {#if showLogo}
        <div transition:horizontalSlide>
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
