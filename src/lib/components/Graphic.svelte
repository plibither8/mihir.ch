<script lang="ts">
  import { spring } from 'svelte/motion';
  import { get } from "svelte/store";

  interface Coords { x: number; y: number };

  const circleCount = 5;
  const circles =
    Array(circleCount)
      .fill(undefined)
      .map((_, index) =>
        spring({ x: 0, y: 0 }, {
          stiffness: 0.1,
          damping: 0.4 + index * 0.1,
        })
      );

  export let headerElement: HTMLElement;
  $: {
    if (headerElement) {
      headerElement.addEventListener('mousemove', ({ clientX, clientY }) => {
        circles.forEach(circle => circle.set({ x: clientX, y: clientY }));
      })
    }
    headerElement;
  }
</script>

<div>
  {#key get(circles[0])}
    {#each circles as circle}
      <div
        class="rounded-full h-10 w-10 bg-accent-900 bg-opacity-30 absolute top-0 left-0 filter mix-blend-exclusion pointer-events-none"
        style="top: {get(circle).y - 20}px; left: {get(circle).x - 20}px"
      ></div>
    {/each}
  {/key}
</div>
