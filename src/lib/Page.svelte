<script lang="ts">
  import { activePage } from '$lib/stores';

  export let title: string;
  export let noPadding: boolean;
  $activePage = title;
</script>

<svelte:head>
  <title>{title ? `${title} « ` : ''}Mihir Chaturvedi</title>
</svelte:head>

{#if noPadding}
  <slot />
{:else}
  <div class="mx-auto w-11/12 md:w-full">
    <slot />
  </div>
{/if}
