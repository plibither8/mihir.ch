<script lang="ts">
  import { slide } from 'svelte/transition';
  import { writable } from 'svelte/store';
  import MusicItem from './MusicItem.svelte';
  import Icon, { ExternalLink } from 'svelte-hero-icons';
  export let data: any;
  const spans: { col: number; row: number }[] = [
    { col: 3, row: 3 },
    { col: 3, row: 3 },
    { col: 2, row: 2 },
    { col: 2, row: 2 },
    { col: 2, row: 2 },
  ];
  const activeArtist = writable(undefined);
</script>

<svelte:window on:click={() => ($activeArtist = undefined)} />

<div
  class="space-y-5"
  on:mouseleave={() => ($activeArtist = undefined)}
  on:click|stopPropagation
>
  <p class="text-gray-400 leading-normal">
    <span class="text-gray-300 font-black">{data.totalPlayCount}</span>
    tracks scrobbled this week.
  </p>

  <p class="text-sm text-gray-400 leading-normal">
    <span>View it on</span>
    <a
      class="link inline-flex items-center space-x-1"
      target="_blank"
      rel="noopener"
      href="https://last.fm/user/plibither8"
    >
      <span>Last.fm</span>
      <Icon src={ExternalLink} size="16" class="text-gray-300" />
    </a>
    or
    <a
      class="link inline-flex items-center space-x-1"
      target="_blank"
      rel="noopener"
      href="https://maloja.mihir.ch"
    >
      <span>my self-hosted Maloja instance</span>
      <Icon src={ExternalLink} size="16" class="text-gray-300" />
    </a>.
  </p>

  <p class="text-sm text-gray-400 leading-normal">
    (Hint: hover over or click on these. 👇)
  </p>

  <div
    class="grid gap-3"
    style="grid-template-columns: repeat(6, 3rem); grid-template-rows: repeat(5, 3rem);"
  >
    {#each data.topFive as artist, i}
      <MusicItem {artist} {activeArtist} span={spans[i]} />
    {/each}
  </div>

  {#if $activeArtist}
    <div transition:slide={{ duration: 200 }}>
      <a
        href={$activeArtist.url}
        target="_blank"
        rel="noopener"
        class="flex items-center justify-between"
      >
        <p class="text-sm">
          <span class=" text-gray-300 font-black">{$activeArtist.name}</span>
          <span class="text-gray-400"
            >&mdash; {$activeArtist.playcount} scrobbles</span
          >
        </p>
        <Icon src={ExternalLink} size="16" class="text-gray-300" />
      </a>
    </div>
  {/if}
</div>
