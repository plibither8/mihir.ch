<script lang="ts">
  export let className: string = "";
  let container: HTMLDivElement;
  let containerWidth: number;
  let overflow: boolean = false;
  $: overflow = container && containerWidth < container.scrollWidth;
  let scrollLeft: number = 0;
  const updateScrollLeft = () => scrollLeft = container.scrollLeft;
</script>

<div
  bind:this={container}
  bind:clientWidth={containerWidth}
  on:scroll={updateScrollLeft}
  class="container flex overflow-auto w-full p-5 {className}"
>
  <slot/>

  {#if overflow}
    <div class="pr-5"/>
  {/if}
</div>

{#if overflow}
  <div class="mx-auto bg-black-900 rounded-full w-20 h-2 relative">
    <div
      class="inner bg-gray-800 h-full rounded-full absolute"
      style="
        width: {containerWidth / container.scrollWidth * 100}%;
        left: {scrollLeft / container.scrollWidth * 100}%
      "
    ></div>
  </div>
{/if}

<style>
  .container::-webkit-scrollbar {
    display: none;
  }
</style>
