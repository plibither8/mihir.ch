<script>
  import Graphic from './Graphic.svelte';
</script>

<section>
  <div class='h-screen p-7 md:p-10 text-container'>
    <h1 class='sticky mb-40 text-4xl font-bold leading-normal text-white md:text-6xl top-7 md:top-10'>
      Mihir Chaturvedi.
    </h1>
  
    <h2 class='sticky mb-20 text-xl leading-normal text-gray-300 md:text-2xl top-1/2'>
      ...or perhaps, <strong>plibither8</strong>.
    </h2>
  
    <h2 class='sticky text-2xl font-bold leading-normal text-gray-100 md:text-4xl top-full'>
      Frontend and UX Developer.
    </h2>
  </div>

  <Graphic />
</section>

<style lang='scss'>
  .text-container {
    height: 90vh;

    // padding: 5vw;

    // h1 {
    //   top: 5vw;
    // }
  }
</style>
