<script>
  import { page } from '$app/stores';
  import links from '../data/navigation.json';
  import NavigationItem from './NavigationItem.svelte';
</script>

<header class="max-w-3xl w-full mx-auto py-5">
  <div class="flex space-x-5 w-11/12 md:w-full mx-auto">
    <nav
      class="bg-white bg-opacity-50 border border-indigo-200 backdrop-filter backdrop-blur-md rounded-lg"
    >
      <ul class="flex px-2">
        {#each links as link}
          <NavigationItem {...link} active={$page.path === link.href} />
        {/each}
      </ul>
    </nav>
  </div>
</header>
