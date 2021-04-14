<script lang="ts">
  import { activePage } from './stores';

  export let collapsed: boolean;
</script>

<section class="bg-indigo-100 border-b border-indigo-200 text-indigo-900 {collapsed && 'mb-0'}">
  {#if collapsed}
    <div class="py-5">
      <div class="max-w-3xl mx-auto w-11/12">
        <h1 class="font-serif space-x-2">
          <a href="/" class="hover:underline text-2xl font-bold">{$activePage}</a>
          <span class="text-lg">«</span>
          <a href="/" class="hover:underline text-lg">Mihir Chaturvedi</a>
        </h1>
      </div>
    </div>
  {:else}
    <div class="py-8 md:py-20">
      <div class="max-w-3xl mx-auto w-11/12">
        <h1 class="text-3xl font-serif font-bold">Mihir Chaturvedi</h1>
        <p class="text-lg leading-relaxed mt-5 max-w-2xl">
          Occaecat enim ea nulla in amet dolore proident. Proident non irure ipsum exercitation eu.
          Non aliqua nulla tempor ad esse id amet.
        </p>
      </div>
    </div>
  {/if}
</section>
