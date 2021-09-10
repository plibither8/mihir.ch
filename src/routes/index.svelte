<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import Container from "$lib/components/Container.svelte";
  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<header
  class="p-5 bg-yellow-200 grid grid-cols-6 border-b-4 border-blueGray-700"
>
  <section class="grid grid-cols-5 grid-row-2 gap-5 col-span-2">
    <div
      class="border-4 border-blueGray-700 p-3 bg-yellow-50 col-span-3 flex items-end"
    >
      <h1 class="text-3xl font-black text-blueGray-700">Mihir Chaturvedi</h1>
    </div>
    <div
      class="border-4 border-blueGray-700 p-3 bg-yellow-50 col-span-2 flex items-end"
    >
      <h1 class="text-2xl font-black text-blueGray-700">aka plibither8</h1>
    </div>
    <div
      class="border-4 border-blueGray-700 p-3 bg-yellow-50 col-span-full flex items-end"
    >
      <h1 class="text-2xl font-medium text-blueGray-700">
        Nisi elit labore voluptate do aute. Nostrud incididunt cupidatat amet
        non do. Elit sint incididunt dolore occaecat deserunt. Qui elit quis
        exercitation reprehenderit voluptate aliqua nostrud adipisicing aliqua
        elit anim elit. Ipsum irure labore duis nisi quis proident eiusmod aute.
      </h1>
    </div>
  </section>
</header>

<main class="p-5 grid grid-cols-4 grid-rows-2"></main>

<style>
  /* section {
    box-shadow: 5px 5px 0 rgb(71, 85, 105);
    transition: box-shadow 0.2s ease-in-out;
  }
  section:hover {
    box-shadow: 5px 5px 0 rgb(71, 85, 105);
  } */
</style>
