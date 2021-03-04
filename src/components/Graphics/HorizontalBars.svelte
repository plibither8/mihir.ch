<script lang='ts'>
  import { onMount } from "svelte";
  import { shuffleArray, random } from "../../utils";

  interface Elements {
    right: HTMLDivElement[],
    left: HTMLDivElement[],
  }

  let innerHeight: number = 0;
  let innerWidth: number = 0;
  let scrollY: number = 0;

  const colors = [
    '#D3F8E2',
    '#E4C1F9',
    '#EDE7B1',
    '#A9DEF9',
  ];

  let config: any;
  let elements: Elements = {
    right: [],
    left: [],
  };
  let configSet = false;

  function renderGraphic (scroll: number) {
    if (!configSet || !elements.right[0] || scroll > innerHeight) return;

    const clientWidth = document.body.clientWidth;
    const fractionScrolled = Math.min(1 - scroll / innerHeight, 0.9);
    const sectionVisible = innerHeight - scroll;
    const width = fractionScrolled * clientWidth;
    const barDivisionSize = innerHeight / (config.barCount * 4 + 1);
    const height = barDivisionSize * config.heightMultiplier;

    elements.right.forEach((element, index) => {
      element.style.bottom = `${barDivisionSize * ((index + 1) * 2) + height / 2}px`;
      element.style.width = `${width}px`;
      element.style.height = `${height + scroll}px`;
    });

    elements.left.forEach((element, index) => {
      element.style.bottom = `${barDivisionSize * ((index + 1) * 2 + 1) + height / 2}px`;
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
    });
  }

  $: {
    renderGraphic(scrollY);
    elements.right[0];
    scrollY;
  }

  onMount(() => {
    const barCount = 3;
    elements.right = Array(barCount).fill(undefined);
    elements.left = Array(barCount).fill(undefined);
    config = {
      barCount,
      colorSets: {
        right: shuffleArray(colors).slice(0, barCount),
        left: shuffleArray(colors).slice(0, barCount),
      },
      heightMultiplier: 2
    }
    configSet = true;
  })
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollY />

{#if configSet}
  {#each Array(config.barCount).fill(0) as _, i}
    <div
      class='absolute right-0 pointer-events-none'
      style='background: {config.colorSets.right[i]}; opacity: {random(0.2, 0.3)}'
      bind:this={elements.right[i]}
    ></div>
    <div
      class='absolute left-0 pointer-events-none'
      style='background: {config.colorSets.left[i]}; opacity: {random(0.2, 0.3)}'
      bind:this={elements.left[i]}
    ></div>
  {/each}
{/if}

<style>
  div {
    mix-blend-mode: hard-light;
    /* opacity: 0.25; */
    transition: width 0.1s ease-in-out;
    /* border: 1px solid; */
  }
</style>
