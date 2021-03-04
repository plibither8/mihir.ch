<script lang='ts'>
  let innerHeight: number = 0;
  let scrollY: number = 0;

  const colors = [
    '#D3F8E2',
    '#E4C1F9',
    '#EDE7B1',
    '#A9DEF9',
    '#E6A0CD',
  ].sort(() => 0.5 - Math.random());

  const [ color1, color2 ] = colors;

  let graphicEl1: HTMLDivElement;
  let graphicEl2: HTMLDivElement;
  let firstRun = true;

  function renderGraphic (scroll: number) {
    if (!innerHeight || scroll > innerHeight) return;

    if (firstRun) {
      graphicEl1.style.backgroundColor = color1;
      graphicEl2.style.backgroundColor = color2;
      firstRun = false;
    }

    const innerWidth = document.body.clientWidth;
    const fractionScrolled = Math.min(1 - scroll / innerHeight, 0.8);
    const sectionVisible = innerHeight - scroll;
    const height = fractionScrolled * sectionVisible;
    const width = fractionScrolled * innerWidth;

    graphicEl1.style.height = `${height}px`;
    graphicEl1.style.width = `${width}px`;

    graphicEl2.style.height = `${height + scroll}px`;
    graphicEl2.style.width = `${width}px`;
  }

  $: {
    renderGraphic(scrollY);
    graphicEl1;
    scrollY;
  }
</script>

<svelte:window bind:innerHeight bind:scrollY />

<div class='absolute bottom-0 pointer-events-none' bind:this={graphicEl1}></div>
<div class='absolute top-0 right-0 pointer-events-none' bind:this={graphicEl2}></div>

<style>
  div {
    mix-blend-mode: hard-light;
    opacity: 0.3;
  }
</style>
