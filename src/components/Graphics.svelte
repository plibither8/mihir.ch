<script lang='ts'>
  export let containerHeight: number;
  export let containerWidth: number;

  const PIXEL_SIZE = 50;
  const ROW_COUNT = Math.ceil(containerHeight / PIXEL_SIZE);
  const COL_COUNT = Math.ceil(containerWidth / PIXEL_SIZE);

  let container: HTMLDivElement;
  $: {
    if (container) {
      container.style.minWidth = containerWidth + 'px';
      container.style.minHeight = containerHeight + 'px';
    }
  }
</script>

<div class='container absolute top-0 left-0 overflow-hidden' bind:this={container}>
  {#each Array(ROW_COUNT).fill() as _}
    <div class="flex flex-1">
      {#each Array(COL_COUNT).fill() as __}
        <div class='pixel' style='width:{PIXEL_SIZE}px; height:{PIXEL_SIZE}px;'></div>
      {/each}
    </div>
  {/each}
</div>

<style>

  .pixel {
    mix-blend-mode: hard-light;
    background: red;
    flex: 1;
    align-self: center;
  }
</style>
