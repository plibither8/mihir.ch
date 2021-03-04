<script lang='ts'>
  import { onMount } from "svelte";
  import { shuffleArray, random } from "../../utils";

  interface Elements {
    top: HTMLDivElement[],
    bottom: HTMLDivElement[],
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
    top: [],
    bottom: [],
  };
  let configSet = false;

  function renderGraphic (scroll: number) {
    const sectionHeight = innerHeight * 0.9;
    if (!configSet || !elements.top[0] || scroll > sectionHeight) return;

    const clientWidth = document.body.clientWidth;
    const fractionScrolled = Math.min(1 - scroll / sectionHeight, 0.9);
    const sectionVisible = sectionHeight - scroll;
    const height = fractionScrolled * sectionVisible;
    const barDivisionSize = clientWidth / (config.barCount * 4);
    const width = barDivisionSize * config.widthMultiplier;

    elements.top.forEach((element, index) => {
      element.style.right = `${barDivisionSize * ((index + 1) * 2) - width / 2}px`;
      element.style.width = `${width}px`;
      element.style.height = `${height + scroll}px`;
    });

    elements.bottom.forEach((element, index) => {
      element.style.right = `${barDivisionSize * ((index + 1) * 2 + 1) - width / 2}px`;
      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
    });
  }

  $: {
    renderGraphic(scrollY);
    elements.top[0];
    scrollY;
  }

  onMount(() => {
    const barCount = innerWidth < 600 ? 3 : innerWidth < 900 ? 4 : 5;
    elements.top = Array(barCount).fill(undefined);
    elements.bottom = Array(barCount).fill(undefined);
    config = {
      barCount,
      colorSets: {
        top: shuffleArray(colors).slice(0, barCount),
        bottom: shuffleArray(colors).slice(0, barCount),
      },
      widthMultiplier: Math.floor(random(innerWidth < 900 ? 4 : 1, 5)) / 2
    }
    configSet = true;
  })
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollY />

{#if configSet}
  {#each Array(config.barCount).fill(0) as _, i}
    <div
      class='absolute top-0 pointer-events-none'
      style='background: {config.colorSets.top[i]}; opacity: {random(0.2, 0.3)}'
      bind:this={elements.top[i]}
    ></div>
    <div
      class='absolute bottom-0 pointer-events-none'
      style='background: {config.colorSets.bottom[i]}; opacity: {random(0.2, 0.3)}'
      bind:this={elements.bottom[i]}
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
