<script lang="ts">
  export let className: string = "";
  let container: HTMLDivElement;
  let containerWidth: number;
  let overflow: boolean = false;
  $: overflow = container && containerWidth < container.scrollWidth;
</script>

<div
  bind:this={container}
  bind:clientWidth={containerWidth}
  class="scroll-container flex overflow-auto w-full p-5 {overflow && "pr-4"} {className}"
>
  <slot/>

  {#if overflow}
    <div class="pr-1"/>
  {/if}
</div>

<style>
  .scroll-container::-webkit-scrollbar {
    @apply h-2;
  }
  .scroll-container::-webkit-scrollbar-track {
    @apply bg-black-900 mx-5 rounded-full;
  }
  .scroll-container::-webkit-scrollbar-thumb {
    @apply bg-gray-800 rounded-full;
  }
</style>
