<script lang="ts">
  export let artist;
  export let activeArtist;
  export let span: { col: number; row: number };
  export let rank: number;
</script>

<div
  class="
    bg-black-500 rounded-md overflow-hidden
    filter saturate-0 hover:saturate-100 transition-all
  "
  style="
    grid-row: span {span.row} / span {span.row};
    grid-column: span {span.col} / span {span.col};
  "
  on:click={() => ($activeArtist = artist)}
  on:mouseover={() => ($activeArtist = artist)}
  on:mouseenter={() => ($activeArtist = artist)}
>
  <img
    class="h-full w-full object-cover transform hover:scale-105 transition-transform"
    src={artist.image}
    alt="{artist.name} cover image"
  />
</div>
