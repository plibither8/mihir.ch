<script lang='ts'>
  import Graphics from './Graphics.svelte';
  let containerHeight: number;
  let containerWidth: number;
</script>

<svelte:window bind:innerWidth={containerWidth} />

<section
  bind:clientHeight={containerHeight}
  class='border-b-8 border-gray-800 p-7 md:px-10 md:py-20'
>
  <h1 class='sticky mb-40 text-4xl font-semibold leading-normal text-gray-900 center md:text-6xl top-7 md:top-20'>
    Mihir Chaturvedi.
  </h1>

  <h2 class='mb-8 text-xl leading-normal text-gray-700 center md:text-2xl'>
    ...or perhaps, <strong class='font-semibold'>plibither8</strong>.
  </h2>

  <h2 class='text-2xl leading-normal text-gray-800 center font-regular md:text-4xl'>
    Frontend and UX Developer.
  </h2>

  {#if containerHeight && containerWidth}
    <Graphics {containerHeight} {containerWidth}/>
  {/if}
</section>

<style lang='scss'>
  section {
    background: #f7f7b4;
  }

  .center {
    @apply max-w-5xl mx-auto;
  }
</style>
